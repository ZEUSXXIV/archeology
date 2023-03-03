import Styles from "../styles/Monument.module.css";
import MainImage from "../assets/main.jpg";
import { Link } from "react-router-dom";
import AnchorLink from "antd/lib/anchor/AnchorLink";
import { Anchor, Button } from "antd";
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
          <Button className={`${Styles.success}`} onClick={()=>props.setIsModalOpen(true)}>
            Know More
          </Button>
          <Button className={`${Styles.success}`}>
            Gallery
          </Button>
        </div>
        <br />
      </div>
    </div>
  );
}
