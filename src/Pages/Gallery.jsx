import React from "react";
import { useEffect } from "react";
import MainImage from "../assets/main.jpg";
import Styles from "../styles/Gallery.module.css";
import { Typography } from "antd";
const Gallery = () => {
  return(
  <>
  
    <Typography style={{fontWeight:'600', fontSize:'36px', textAlign:'center',paddingTop:'2%', paddingBottom:'2%'}} >Gallery</Typography>
   <div className={`${Styles.container}`}>
    <div className={`${Styles.monu}`}>
      <div >
              <img src={MainImage} style={{borderRadius: '20',height:"250px",width:"300px"}} />
      </div>
      <div className={`${Styles.label}`}>
              <Typography>Reis Magos Church</Typography>
      </div>
    </div>
    <div className={`${Styles.monu}`}>
      <div >
              <img src={MainImage} style={{borderRadius: '20',height:"250px",width:"300px"}} />
      </div>
      <div className={`${Styles.label}`}>
              <Typography>Reis Magos Church</Typography>
      </div>
    </div><div className={`${Styles.monu}`}>
      <div >
              <img src={MainImage} style={{borderRadius: '20',height:"250px",width:"300px"}} />
      </div>
      <div className={`${Styles.label}`}>
              <Typography>Reis Magos Church</Typography>
      </div>
    </div><div className={`${Styles.monu}`}>
      <div >
              <img src={MainImage} style={{borderRadius: '20',height:"250px",width:"300px"}} />
      </div>
      <div className={`${Styles.label}`}>
              <Typography>Reis Magos Church</Typography>
      </div>
    </div>
    </div>
  </>)
};

export default Gallery;
