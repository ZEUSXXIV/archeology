import Styles from "../styles/Gallery.module.css";
import MainImage from "../assets/main.jpg";


import { Button, Typography } from "antd";


export default function Gallery_component(props) {
  
  return (
    
     <div className={`${Styles.container}`}>
      <div className={`${Styles.monu}`}>
      <div style={{alignItems:"center",justifyContent:"center"}}>
            {props.mainImg}
              <img src={MainImage} style={{borderRadius: '20',height:"35vh",width:"43vh"}} />
      </div>
      <div className={`${Styles.label}`}>
              <Typography>{props.Title}</Typography>
      </div>
      </div>
    </div>
   
  );
}
