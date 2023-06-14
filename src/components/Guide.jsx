import styles from '../styles/Guide.module.css'
import React from "react"
import Officer from './Officer'
import History from './History'
import Image from "../assets/Chart.jpg";
import ReactGA from "react-ga";
import { Typography, Button } from "antd";
export default function Guide(){

const [state,setState]=React.useState({
        history:true,
        officers:false,
        chart:false
    })
    
    function handleChange(event){
        
        handleButtonClick(); 
        setState(prevValue=>({
            history:false,
            officers:false,
            chart:false,
          [event.target.name]:true 
          
         }))
     }
     const handleButtonClick = () => {
        ReactGA.event({
          category: 'Division',
          action: 'Button Click',
          label: 'Button Label', 
        });
      };
    return(
            <div className={`${styles.guide}`}>
                <Typography
                style={{
                    fontWeight: "600",
                    fontSize: "36px",
                    textAlign: "center",
                    paddingTop: "2%",
                    paddingBottom: "2%",
                }}
                >
                About Us
                </Typography>
                <div className={`${styles.buttons}`}> 
                <button style={{marginRight: "10px"}} name="history"  className="" onClick={handleChange}>Introduction</button>
                <button style={{marginRight: "10px"}} name="officers" className="" onClick={handleChange}>Officers</button>
                <button name="chart" className="" onClick={handleChange}>Chart</button></div>
                <div className={`${styles.history_text}`}>{state.history && <History/>}</div> 
                <div className={`${styles.history_text}`}>{state.officers &&<> <Officer/> </>}</div>
                <div>{state.chart&& <img src={Image} alt="Chart" style={{paddingTop:'40px',width:'100%',height:'100%'}}/>}</div>
            </div>
        )
}
