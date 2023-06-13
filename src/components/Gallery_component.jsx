import Styles from "../styles/Gallery_component.module.css";
import MainImage from "../assets/main.jpg";
import { Button, Typography } from "antd";
export default function Gallery_component(props) {
  return (
    
     <div className={`${Styles.container}`}>
      <div className={`${Styles.monu}`}>
      <div style={{alignItems:"center",justifyContent:"center"}}>
            
              <img src={props.mainImg} style={{borderRadius: '20',height:"35vh",width:"43vh"}} />
      </div>
      <div className={`${Styles.label}`}>
              <Typography>{props.Title}</Typography>
      </div>
      </div>
    </div>
   
  );
}
