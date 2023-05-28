import React from "react"
import { useState } from "react";
import featured from "../assets/JS Data/Featured"
import Monument from "../components/Monument"
import { Modal, Typography } from "antd";

import Styles from "../styles/ModalFeatured.module.css";
import { useEffect } from "react";
import MainImage from "../assets/main.jpg";
import axios from "axios";
import MonumentCard from "../components/MonumentCard/MonumentCard";

export default function Featured(){
    const [activeItem, setActiveItem] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [data, setData] = useState([])

//     useEffect(()=>{

// // console.log("nidhiiiiiii")

//       axios.get("")

//     },[])

useEffect(()=>{
  console.log("Naveeeennn")
  axios.get("http://localhost:5000/api/v1/monumentfeatured").then((res, err)=>{

  if(err){
    console.log("err", err)
  }

    console.log(res.data)
    setData(res.data)
  })
},[])
 
     return(
        <>
        <div
        style={{
          background: "rgba(189,220,224,0.8)",
        }}
        >

        <Typography className={`${Styles.title}`}
        >
          Featured Monuments
        </Typography>
        <div className={`${Styles.container}`}
         
        >
          {/* {monuElements} */}
          {data.map((monu) => (
            <div
              onClick={() => {
                setActiveItem(monu);
                // setIsModalOpen(true)
              }}
              key={monu.Id}
            >
              {/* <Monument 
                key={monu.Id}
                Title={monu.Title} 
                Description={monu.Description}
                Map={monu.Map}
                Geo={monu.Geo}
                setIsModalOpen={setIsModalOpen}
                /> */}
                <MonumentCard item={monu} />
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
          <h3 className={`${Styles.sub_title}`}>{activeItem?.Title}</h3>
          <div>
            <img src={MainImage} className={`${Styles.img}`} />
          </div>
          <div>
    
            <div className={`${Styles.monu_para}`}>
              {activeItem?.Description}
            </div>
            <div className={`${Styles.buttons}`}>
              <button className={`${Styles.button}`}>
                <a href={activeItem?.Map} target="_blank">
                  Map
                </a>
              </button>

              <button className={`${Styles.button}`}>
                <a href={activeItem?.Geo} target="_blank">
                  Tour
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