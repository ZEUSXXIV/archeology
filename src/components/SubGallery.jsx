import MainImage from "../assets/main.jpg";
import Main1 from "../assets/main1.jpg"
import ImageGallery from 'react-image-gallery';
import { PhotoAlbum } from "react-photo-album";


import { Button, Typography } from "antd";

const images = [
  {
    original: Main1,
    thumbnail: Main1,
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
const photos = [
  { src: require('../assets/main.jpg'), width: 800, height: 1600 },
  { src:  require('../assets/main1.jpg'), width:800, height:1780 },
  { src:  require('../assets/try.jpg'), width: 1600, height: 900 },
  { src:  require('../assets/main1.jpg'), width: 1600, height: 900 },
  

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
   <div style={{minHeight:"150vh",backgroundColor:"white"}}>
   {/* <h1>lol</h1> */}
   {/* <ImageGallery items={images}  style={{minHeight:"150vh",maxHieght:"100%"}}/> */}
   <PhotoAlbum layout="rows" photos={photos} />
   </div>
   </>
  );
}
