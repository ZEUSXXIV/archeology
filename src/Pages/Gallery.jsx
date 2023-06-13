import React from "react";
import { useState,useEffect} from "react";
import pics from "../assets/JS Data/Gallery";
import Gallery_component from "../components/Gallery_component";
import { Typography } from "antd";
import Styles from "../styles/Gallery.module.css"
import axios from "axios";

const Gallery = () => {
        const [activeItem, setActiveItem] = useState(null);
        const [data,setData]=useState([])
        console.log("gallery");
        useEffect(() => {
          axios.get("http://localhost:5000/api/v1/gallery").then((res, err) => {
            if (err) {
              console.log("err", err);
            }
      
            console.log(res.data);
            let temp=res.data.filter((item)=> {
              if(item.main_img === "")
              return item
            })

            console.log(temp)
            setData(temp);
          });
        }, []);
      
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
    {data.map((item) => (
      < >
            {item.main_img && <div onClick={() => {
                setActiveItem(item);
                window.location.href="/subgallery/"+item.monument_id;
              }}>{
              <Gallery_component
                Title={item.site}
                mainImg={item.main_img}
                key={item.monument_id}
              />}
            </div>}
            </>
          ))}
      
        </div>



   </div>
  </>)
};

export default Gallery;
