import React from "react"
import { useState } from "react";
import featured from "../assets/JS Data/Featured"
import Monument from "../components/Monument"
import { Modal, Typography } from "antd";

import Styles from "../styles/ModalFeatured.module.css";
import { useEffect } from "react";
import MainImage from "../assets/main.jpg";

export default function Featured(){
    const [activeItem, setActiveItem] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    /* const monuElements=featured.map(monu => {
        return <Monument 
        key={monu.Id}
        Title={monu.Title} 
        Description={monu.Description}
        Map={monu.Map}
        Geo={monu.Geo}/>
    }) */
     return(
        <>
        <div
        style={{
          background: "rgba(189,220,224,0.8)",
          // background:
          //   "linear-gradient(0deg, rgba(139,170,174,1) 20%, rgba(255,255,255,1) 100%)",
        }}
        >

        <Typography
          style={{
            fontWeight: "600",
            fontSize: "36px",
            textAlign: "center",
            paddingTop: "2%",
            paddingBottom: "2%",
          }}
        >
          Featured Monuments
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
          {featured.map((monu) => (
            <div
              onClick={() => {
                setActiveItem(monu);
                // setIsModalOpen(true)
              }}
              key={monu.Id}
            >
              <Monument 
                key={monu.Id}
                Title={monu.Title} 
                Description={monu.Description}
                Map={monu.Map}
                Geo={monu.Geo}
                setIsModalOpen={setIsModalOpen}
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
          <h3 className={`${Styles.title}`}>{activeItem?.Title}</h3>
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