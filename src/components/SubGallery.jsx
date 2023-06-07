import MainImage from "../assets/main.jpg";
import Main1 from "../assets/main1.jpg";
import ImageGallery from "react-image-gallery";
import { PhotoAlbum } from "react-photo-album";
import Styles from "../styles/SubGallery.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const photos = [
  { src: require("../assets/main.jpg"), width: 1800, height: 1600 },
  { src: require("../assets/main1.jpg"), width: 1800, height: 1780 },
  { src: require("../assets/try.jpg"), width: 2000, height: 1900 },
  { src: require("../assets/main1.jpg"), width: 1600, height: 900 },
  { src: require("../assets/main1.jpg"), width: 1600, height: 900 },
  { src: require("../assets/main1.jpg"), width: 1600, height: 900 },
  { src: require("../assets/main.jpg"), width: 1800, height: 1600 },
];

export default function SubGallery() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {

    console.log("Id", id)

    axios.get(`http://localhost:5000/api/v1/gallery/${id}`).then((res, err) => {
      if (err) {
        console.log("err", err);
      }

      console.log("lewl",res.data);

      let temp = []
      
      temp.push( { src: res.data[0]?.main_img, width: 1800, height: 1600 })
      

      res.data[0]?.subgallery?.map((item) =>{
        temp.push( { src: item, width: 1800, height: 1600 })
      } )

     
      setData(temp);
    });
  }, []);
  return (
    <>
      <div className={`${Styles.container}`}>
        <PhotoAlbum layout="rows" photos={data}/>
        {/* {data?.subgallery?.map((item) => <img src={item} alt="fuck off" />
        )} */}
      </div>
    </>
  );
}
