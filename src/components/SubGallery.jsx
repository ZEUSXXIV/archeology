import Styles from "../styles/Gallery.module.css";
import MainImage from "../assets/main.jpg";

import ImageGallery from 'react-image-gallery';



import { Button, Typography } from "antd";

const images = [
  {
    original: MainImage,
    thumbnail: MainImage,
  },
  {
    original: MainImage,
    thumbnail: MainImage,
  },
  {
    original: MainImage,
    thumbnail: MainImage,
  },
  {
    original: MainImage,
    thumbnail: MainImage,
  },
];


export default function SubGallery(props) {
  
  return (
    
    //  <div className={`${Styles.container}`}>
    //   <div className={`${Styles.monu}`}>
    //   <div>
    //         {/* {props.Images} */}
    //           {/* <img src={MainImage} style={{borderRadius: '20',height:"250px",width:"300px"}} /> */}
    //   </div>
    //   <div className={`${Styles.label}`}>
    //           <Typography>{props.Title}</Typography>
    //   </div>
    //   </div>
    // </div>
   <>
   {/* <h1>lol</h1> */}
   <ImageGallery items={images} />
   </>
  );
}
