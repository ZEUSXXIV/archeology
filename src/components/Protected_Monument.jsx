import Styles from "../styles/Monument.module.css";
import MainImage from "../assets/main.jpg";
import { Link } from "react-router-dom";
import AnchorLink from "antd/lib/anchor/AnchorLink";
import { Anchor, Button, Typography } from "antd";
import ReadMoreReact from 'read-more-react';
export default function Protected_Monument(props) {
  var desp = props.Description.slice(0,250);
  return (
   
     <div className={`${Styles.monu}`}>
      <div className={`${Styles.components}`}>
          <div>
              <h3 className={`${Styles.title}`}>{props.Title}</h3>
          </div>
          <div >
              <img src={MainImage} className={`${Styles.img}`} />
          </div>
        <div style={{display:'flex' , justifyContent:'space-between', flexDirection:'column', height:'100%', alignItems:'center' }}>
          <Typography style={{textAlign:'center'}}>{desp}...</Typography>
          
        {/* <ReadMoreReact text={desp}
            min={100}
            ideal={100}
            max={100}
            readMoreText="read bitch! :)"/> */}
          {/* <div className={`${Styles.monu_para}`}>{desp}</div> */}
          {/* <div className={`${Styles.buttons}`}>
          <button className={`${Styles.button}`}>
            <a href={props.Map} target="_blank">
            Map
            </a>
          </button>
          
          <button className={`${Styles.button}`}>
            <a href={props.Geo} target="_blank">
              Geo
            </a>
          </button>
          </div> */}
          <Button onClick={()=>props.setIsModalOpen(true)}>
            Know More
          </Button>
          </div>
        <br />
      </div>
    </div>
   
  );
}
