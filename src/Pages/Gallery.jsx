import React from "react";
import { useEffect } from "react";
import MainImage from "../assets/main.jpg";
const Gallery = () => {
  return(
  <>
    <div>Gallery</div>
    <div >
              <img src={MainImage} style={{height:"250px",width:"300px"}} />
    </div>
    <div>
              <h3>Reis Magos Church</h3>
          </div>
  
  </>)
};

export default Gallery;
