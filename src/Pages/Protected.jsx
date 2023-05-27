import React from "react";
import { useState } from "react";
import details from "../assets/JS Data/Protected";
import Protected_Monument from "../components/Protected_Monument";
import { Modal, Typography } from "antd";

import MainImage from "../assets/main.jpg";

import Styles from "../styles/Modal.module.css";
import { useEffect } from "react";
import axios from "axios";

export default function Protected() {
  const [activeItem, setActiveItem] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [data, setData] = useState([])

  useEffect(()=>{
    console.log("Naveeeennn")
    axios.get("http://localhost:5000/api/v1/monument").then((res, err)=>{

    if(err){
      console.log("err", err)
    }

      console.log(res.data)
      setData(res.data)
    })
  },[])


   


  return (

    <>
      <div
        style={{
          background: "#eee",
          // background:
          //   "linear-gradient(0deg, rgba(8,93,33,1) 0%, rgba(232,251,217,1) 90%, rgba(255,255,255,1) 100%)",
        }}
      >
        {/* <h1 style={{textAlign:'center'}}>Protected Monuments</h1> */}
        <Typography
          style={{
            fontWeight: "600",
            fontSize: "36px",
            textAlign: "center",
            paddingTop: "2%",
            paddingBottom: "2%",
          }}
        >
          Protected Monuments
        </Typography>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* {monuElements} */}

          {/* {details.map((monu) => (

          {data.map((monu) => (

            <div
              onClick={() => {
                setActiveItem(monu);
                // setIsModalOpen(true)
              }}
              key={monu.Id}
            >
              <Protected_Monument
                Title={monu.site}
                Description={monu.description}
                Map={monu.Map}
                Geo={monu.Geo}
                setIsModalOpen={setIsModalOpen}
                Image={monu.Image}
                // setActiveItem={setActiveItem}
              />
            </div>
          ))} */}

{data.map((monu) => (
            <div
              onClick={() => {
                setActiveItem(monu);
                // setIsModalOpen(true)
              }}
              key={monu.Id}
            >
              <Protected_Monument
                Title={monu.site}
                Description={monu.description}
                Map={monu.Map}
                Geo={monu.Geo}
                setIsModalOpen={setIsModalOpen}
                Image={monu.Image}
                // setActiveItem={setActiveItem}
              />
            </div>
          ))}
        </div>
      </div>

      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        closable={false}
      >
        <div className={`${Styles.monu}`}>
          <div className={`${Styles.components}`}>
            <h3 className={`${Styles.title}`}>{activeItem?.site}</h3>
            <div>
              <img src={MainImage} className={`${Styles.img}`} />
            </div>
            <div>
              {/* <Typography maxLength={5}>{desp}</Typography> */}
              <div className={`${Styles.monu_para}`}>
                {activeItem?.description}
              </div>
              <div className={`${Styles.buttons}`}>
                <button className={`${Styles.button}`}>
                  <a href={activeItem?.Map} target="_blank">
                    Map
                  </a>
                </button>

                <button className={`${Styles.button}`}>
                  <a href={activeItem?.Geo} target="_blank">
                    Geo
                  </a>
                </button>
              </div>
            </div>
            <br />
          </div>
        </div>
      </Modal>
    </>
  );
}
// #4f7942
