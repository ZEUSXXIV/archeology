import Styles from "../styles/Monument.module.css";
import MainImage from "../assets/main.jpg";
import { Link } from "react-router-dom";
import AnchorLink from "antd/lib/anchor/AnchorLink";
import { Anchor } from "antd";
export default function Monument(props) {
  var desp = props.Description;
  return (
    <div className={`${Styles.monu}`}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ paddingRight: "2%" }}>
          <img src={MainImage} style={{ height: "40vh", width: "60vh" }} />
        </div>
        <div>
          <h3 style={{ fontSize: "1.5rem" }}>{props.Title}</h3>
          <div className={`${Styles.monu_para}`}>{desp}</div>

          <button onClick={()=> console.log("props==>>",props)}>
            <a href={props.Map} target="_blank">
            Map
            </a>
          </button>
          
          <button onClick={props.Geo}>Geo</button>
        </div>
        <br />
      </div>
    </div>
  );
}
