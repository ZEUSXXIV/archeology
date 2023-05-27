import Styles from "../styles/Monument.module.css";
import MainImage from "../assets/main.jpg";

import { Link } from "react-router-dom";
import AnchorLink from "antd/lib/anchor/AnchorLink";
import { Anchor, Button, Typography } from "antd";
import Like from "./like/Like";
export default function Monument(props) {
  //to display only 20% of it's content
  var desp = props.Description.slice(0,200);
  return (
    <div className={`${Styles.monu}`}>
      <div className={`${Styles.components}`}>
          <div style={{display:'flex', flexDirection:'row'}} >
              <h3 style={{flex:15}} className={`${Styles.title}`}>{props.Title}</h3>
              <div style={{flex:1}}>
              <Like />
              </div>
              
          </div>
          <div >
              <img src={MainImage} className={`${Styles.img}`} />
          </div>
        <div style={{display:'flex' , justifyContent:'space-between', flexDirection:'column', height:'100%', alignItems:'center' }}>
          <Typography style={{textAlign:'center'}}>{desp}...</Typography>
          <Button className={`${Styles.success}`} onClick={()=>props.setIsModalOpen(true)}>
            Know More
          </Button>
          
          <Button key={props.Id} onClick={()=>{window.location.href="/gallery"}} className={`${Styles.success}`}>
            Gallery
          </Button>
        </div>
        <br />
      </div>
    </div>
  );
}
