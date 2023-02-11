import React from "react"
import details from "../assets/JS Data/Protected"
import Monument from "../components/Monument"
export default function Protected(){
    const monuElements=details.map(monu => {
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
        <h1 style={{textAlign:'center'}}>Protected Monuments</h1>
        {monuElements}
        </div>
        </>
     )
}