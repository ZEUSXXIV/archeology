import React, { useEffect, useState } from "react";
import "./Top.css";
import Button from "../MonumentCard/Button";
import { Tag } from "antd";
import axios from "axios";

const Top = ({ item }) => {
  var desp = item.description.slice(0, 100);
  const [data, setData] = useState({});
  const [mainImage, setMainImage] = useState("")

  useEffect(() => {
    console.log("id==>>", item._id);
    
    axios
      .get(`http://localhost:5000/api/v1/gallery/${item._id}`)
      .then((res, err) => {
        if (err) {
          console.log("err", err);
          return
        }
        setMainImage(res.data[0].main_img)
      });

    axios
      .get(`http://localhost:5000/google/top`)
      .then((res, err) => {
        if (err) {
          console.log("err", err);
        }

        console.log(res.data);
        setData(res.data[0]);
      });
  }, []);

  return (
    <>
      <div className="reccard">
        <div
          className="recimg"
          style={{ backgroundImage: `url('${data?.main_img}')` }}
        ></div>

        <div className="text">
          <p className="h3">{item.site}</p>
          {/* <p className="p">{desp} ...</p>

          <div style={{ display: "flex", flexDirection: "row",height:'25px' }}>
            <Rating
              initialValue={parseFloat(item.rating)}
              readonly={true}
              size={20}
              allowFraction
            />
            <p className="h3">{item.rating}</p>
          </div> */}

          <div style={{ marginLeft: "5px" }}>
            {item.type.map((tag) => (
              <Tag color="purple">{tag}</Tag>
            ))}
          </div>

          <div
            style={{ marginTop: "5px" }}
            onClick={() => (window.location.href = `/monument/${item._id}`)}
          >
            <Button />
          </div>
        </div>
      </div>
    </>
  );
};

export default Top;