import React from 'react'

import Logo from '../assets/logo.png'

const Card = () => {
  return (
    <div >
        <img src={Logo} style={{borderRadius:'50%'}} height={100} width={100} />
    </div>
  )
}

export default Card