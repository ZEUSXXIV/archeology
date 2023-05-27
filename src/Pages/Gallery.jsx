import React from "react";
import { useState} from "react";
import pics from "../assets/JS Data/Gallery";
import Gallery_component from "../components/Gallery_component";
import { Typography } from "antd";
import Styles from "../styles/Gallery.module.css"

const Gallery = () => {
        const [activeItem, setActiveItem] = useState(null);
        return(
  <>
  <div style={{background:"rgb(255,237,204)"}}>
    <Typography className={`${Styles.title}`} >Gallery</Typography>
   <div
   style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "30px",
        justifyContent: "center",
        alignItems: "center",
      }}>
    {pics.map((item) => (
            <div key={item.Title}  onClick={() => {
                setActiveItem(item);
                window.location.href="/subgallery/"+item.Id;
              }}>{
              <Gallery_component
                Title={item.Title}
                mainImg={item.mainImg}
                key={item.Id}
              />}
            </div>
          ))}
      
        </div>



   </div>
  </>)
};

export default Gallery;
