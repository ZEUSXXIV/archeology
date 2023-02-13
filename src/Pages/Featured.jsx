import React from "react"
import featured from "../assets/JS Data/Featured"
import Monument from "../components/Monument"
export default function Featured(){
    const monuElements=featured.map(monu => {
        return <Monument 
        key={monu.Id}
        Title={monu.Title} 
        Description={monu.Description}
        Map={monu.Map}
        Geo={monu.Geo}/>
    })
     return(
        <>
        <div style={{margin:'5% 10% 0% 10%'}}>
        <h1 style={{textAlign:'center'}}>Featured Monuments</h1>
        {monuElements}
        </div>
        </>
     )
}