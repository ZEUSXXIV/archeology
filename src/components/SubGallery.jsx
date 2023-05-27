import MainImage from "../assets/main.jpg";
import Main1 from "../assets/main1.jpg"
import ImageGallery from 'react-image-gallery';
import { PhotoAlbum } from "react-photo-album";
import Styles from "../styles/SubGallery.module.css";
const photos = [
  { src: require('../assets/main.jpg'), width:1800, height: 1600 },
  { src:  require('../assets/main1.jpg'), width:1800, height:1780 },
  { src:  require('../assets/try.jpg'), width: 2000, height: 1900 },
  { src:  require('../assets/main1.jpg'), width: 1600, height: 900 },
  { src:  require('../assets/main1.jpg'), width: 1600, height: 900 },
  { src:  require('../assets/main1.jpg'), width: 1600, height: 900 },
  { src: require('../assets/main.jpg'), width:1800, height: 1600 },
  

];


export default function SubGallery() {
  
  return (
    
   <>
   <div className={`${Styles.container}`} >
   <PhotoAlbum layout="rows" photos={photos}/>
   </div>
   </>
  );
}
