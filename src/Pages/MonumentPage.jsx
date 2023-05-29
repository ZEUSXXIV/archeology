import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Dummy from "./try.jpg";

import styles from "../styles/MonumentPage.module.css";
import { Col, Row, Tag, Typography } from "antd";

import { Rating } from "react-simple-star-rating";
import HoverButton from "../components/HoverButton/HoverButton";
import MonumentCard from "../components/MonumentCard/MonumentCard";

const { Title } = Typography;

const MonumentPage = () => {
  const { id } = useParams();

  const [data, setData] = useState({});

  const [recommendations, setRecommendations] = useState([]);

  let temp = [];

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/monument/${id}`)
      .then((res, err) => {
        if (err) {
          console.log("err", err);
        }

        // console.log(res.data[0]);
        // console.log(parseFloat(res.data[0].rating));
        setData(res.data[0]);
      });

      axios
      .get(`http://localhost:5000/api/v1/recommend/monument/${id}`)
      .then((res, err) => {
        if (err) {
          console.log("err", err);
        }
        console.log("response", res.data.response);

        res.data.response.map((item) => {
          axios
            .get(`http://localhost:5000/api/v1/monument/${item}`)
            .then((res, err) => {
              if (err) {
                console.log("err", err);
              }

              console.log("response==>>>", res.data[0]);
              temp.push(res.data[0]);
            });

          console.log("temp", temp);

          
        })

        setRecommendations(temp);


        // setRecommendations(res.data.response)
      })

                      

                  //     res.data.response.map(async(item)=>{

                  //       const response = await axios.get(`http://localhost:5000/api/v1/monument/${item}`)

                  //       console.log("response==>>", response.data[0])

                  //       temp.push(response.data[0])

                  //     })

        


                  // let temp = [];

                  // res.data.response.map((item) => {
                  //   axios
                  //     .get(`http://localhost:5000/api/v1/monument/${item}`)
                  //     .then((res, err) => {
                  //       if (err) {
                  //         console.log("err", err);
                  //       }

                  //       console.log("response==>>>", res.data[0]);
                  //       temp.push(res.data[0]);
                  //     });

                  //   console.log("temp", temp);

                  //   setRecommendations(temp);
                    // temp != [] ? setRecommendations(temp) : null
                  // });
      // });

      // setRecommendations(temp);
  }, []);

  // useEffect(()=>{

  //   axios
  //   .get(`http://localhost:5000/api/v1/recommend/monument/${id}`)
  //   .then((res, err) => {
  //     if (err) {
  //       console.log("err", err);
  //     }
  //     console.log("response", res.data.response);

      

  //     res.data.response.map(async(item)=>{

  //       const response = await axios.get(`http://localhost:5000/api/v1/monument/${item}`)

  //       console.log("response==>>", response.data[0])

  //       temp.push(response.data[0])

  //     })
  //   })




  // },[data])


  return (
    <>
      <button onClick={() => {
        // setRecommendations(recommendations);
        console.log("reccs re==>>", recommendations)}}>
        click
      </button>

      <Row justify="center">
        <Col span={22}>
          <Row justify="center" align="center">
            <Col span={12}>
              <img src={Dummy} style={{ width: "100%", height: "100%" }} />
            </Col>
            <Col span={10} offset={2}>
              <Title level={2}>{data.site}</Title>
              <Title level={5}>{data.description}</Title>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  height: "25px",
                  alignItems: "center",
                }}
              >
                <Rating
                  initialValue={parseFloat(data.rating)}
                  readonly={true}
                  size={30}
                  allowFraction
                />
                <Title level={4}>{data.rating}</Title>
              </div>
              <br />
              <div>
                {data.type?.map((tag, index) => (
                  <Tag key={index} color="purple">{tag}</Tag>
                ))}
              </div>

              <Title level={5}>Taluka - {data.taluka}</Title>
              <Title level={5}>Village - {data.village}</Title>
              <Title level={5}>
                Visiting time -{" "}
                {data.visitingTime !== "" ? data.visitingTime : "Not Specified"}
              </Title>
              <div style={{ display: "flex" }}>
                <HoverButton title="Maps" />
                <HoverButton title="Geo" />
              </div>
              
            </Col>
          </Row>
        </Col>
      </Row>
      {/* {recommendations.map((item)=> <h1>{item.site}</h1>)} */}

      {/* { recommendations[0]?.site && <MonumentCard item={recommendations[0]} /> */}



      {/* <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "15px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {recommendations.map((monu) => {
          console.log("monu==>>", monu);
          return (
            <div key={monu.site}>
              <MonumentCard item={monu} />
            </div>
          );
        })}
      </div> */}
    </>
  );
};

export default MonumentPage;
