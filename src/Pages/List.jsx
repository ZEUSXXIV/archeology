import React from "react"
import lists from "../assets/JS Data/List"
import Monument from "../components/Monument"
export function Featured(){
    const monuElements=lists.map(monu => {
        return <Monument 
        key={monu.id}
        Email={monu.email} 
        Address={monu.address}/>
    })
     return(
        <>
        {monuElements}
        </>
     )
}