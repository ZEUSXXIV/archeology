import React from "react"
import featured from "../assets/JS Data/Featured"
import Monument from "../components/Monument"
export default function Featured(){
    const monuElements=featured.map(monu => {
        return <Monument 
        key={monu.Id}
        Title={monu.Title} 
        Description={monu.Description}/>
    })
     return(
        <>
        <h2>Featured Monuments</h2>
        {monuElements}
        </>
     )
}