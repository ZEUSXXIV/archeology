//rafce
import React from 'react'
import './Alert.css'

const Alert = () => {
  return (      
    <div class="cookieCard">
        <p class="cookieDescription">Ticket has been mailed successfully</p>
        <button class="acceptButton" onClick={()=>window.location.href = "/"}>Okay</button>
    </div>

  )
}

export default Alert
