import Styles from "../styles/Monument.module.css";
import MainImage from '../assets/main.jpg'
export default function Monument(props) {
  var desp = props.Description;
  return (
    <div className={`${Styles.monu}`}>
      <div style={{display:"flex", flexDirection:'row'}} >
        <div style={{paddingRight:'2%'}}>
            <img src={MainImage} 
            // height={40} width={40} 
            style={{height:"40vh", width:"60vh"}} />
        </div>
        <div>
          <h3 style={{fontSize:'1.5rem'}} >{props.Title}</h3>
          <div className={`${Styles.monu_para}`}>{desp}</div>
        </div>
        <br />
      </div>
    </div>
  );
}
