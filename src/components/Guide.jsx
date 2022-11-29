import styles from '../styles/Guide.module.css'
import React from "react"
import Officer from './Officer'
import History from './History'
export default function Guide(){

const [state,setState]=React.useState({
        history:true,
        officers:false,
        chart:false
    })
    
    function handleChange(event){
         
        setState(prevValue=>({
            history:false,
            officers:false,
            chart:false,
          [event.target.name]:true 
          
         }))

     }
    
    return(
            <div className={`${styles.guide}`}>
                <p className={`${styles.title}`}>About Us</p>
               <div className={`${styles.buttons}`}> <button name="history"  className="" onClick={handleChange}>Introduction</button>
                <button name="officers" className="" onClick={handleChange}>Officers</button>
                <button name="chart" className="" onClick={handleChange}>Chart</button></div>
                <div className={`${styles.history_text}`}>{state.history && <History/>}</div> 
                <div className={`${styles.history_text}`}>{state.officers &&<> <Officer/> </>}</div>
                <div>{state.chart&& <p>chart</p>}</div>
            </div>
        )
}
