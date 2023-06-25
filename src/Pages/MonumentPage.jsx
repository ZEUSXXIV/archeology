import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Inf from "../assets/inf.jpg";

import styles from "../styles/MonumentPage.module.css";
import { Col, Row, Tag, Typography } from "antd";

import { Rating } from "react-simple-star-rating";
import HoverButton from "../components/HoverButton/HoverButton";
import RecommendCard from "../components/RecommendCard/RecommendCard";
import Map from "../components/Map/Map";

const { Title } = Typography;

const MonumentPage = () => {
  const { id } = useParams();

  const [data, setData] = useState({});

  const [recommendations, setRecommendations] = useState([]);

  const [mainImage, setMainImage] = useState("")

  let temp = [];

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/monument/${id}`)
      .then((res, err) => {
        if (err) {
          console.log("err", err);
          return
        }
        setData(res.data[0]);
      });

      axios
      .get(`http://localhost:5000/api/v1/gallery/${id}`)
      .then((res, err) => {
        if (err) {
          console.log("err", err);
          return
        }
        setMainImage(res.data[0].main_img)
      });

      axios
      .get(`http://localhost:5000/recommend/monument/${id}`)
      .then((res, err) => {
        if (err) {
          console.log("err", err);
        }
        console.log("response", res.data.response);

      axios
      .get(`http://localhost:5000/api/v1/monument`)
      .then((resp, err) => {
        if (err) {
          console.log("err", err);
          return
        }
        console.log("resp==>>", resp);
        let recommended = resp.data?.filter((item)=>{
          if(res.data.response[0] == item._id || res.data.response[1] == item._id || res.data.response[2] == item._id || res.data.response[3] == item._id){
            return item
          }
        })

        console.log("recommendations==>>", recommended)
        setRecommendations(recommended)
      });


      })

  }, []);


  return (
    <>
      {/* <button onClick={() => {
        // setRecommendations(recommendations);
        console.log("reccs re==>>", recommendations)}}>
        click
      </button> */}

      <Row justify="center">
        <Col span={22}>
          <Row justify="center" align="center">
            <Col span={12}>
              <img src={mainImage == "" ? Inf : mainImage} style={{ width: "100%", height: "100%" }} />
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
              <div style={{ display: "flex", justifyContent:'space-between' }}>
                <HoverButton title="Maps" link={`https://www.google.com/maps/search/?api=1&query=${data.latitude},${data.longitude}`} />
                <HoverButton title="Geo" link={`https://earth.google.com/web/@${data.latitude},${data.longitude},0a,1000d,35y,0h,0t,0r/data=CigiJgokCU8Vv8L1RnxKBahDkBJwYICABIA`} />
              </div>
              
            </Col>
          </Row>

          <Row justify="center" style={{margin:'5%'}} >
            <Map lat={data.latitude} lng={data.longitude} />
          </Row>
        </Col>
      </Row>
      {/* {recommendations.map((item)=> <h1>{item.site}</h1>)} */}

      {/* { recommendations[0]?.site && <RecommendCard item={recommendations[0]} /> */}

      <Row justify="center" style={{marginTop:'5%',marginBottom:'3%'}}>          
      <Title level={2}>Recommendations For You</Title>
      </Row>
      <div
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
              <RecommendCard item={monu} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MonumentPage;
