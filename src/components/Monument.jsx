import Styles from "../styles/Monument.module.css"
export default function Monument(props){
    var desp=props.Description
    return(
        <div className={`${Styles.monu}`}>
            <h3>{props.Title}</h3>
            <div className={`${Styles.monu_para}`}>{desp}</div><br/>
        </div>
    )
}