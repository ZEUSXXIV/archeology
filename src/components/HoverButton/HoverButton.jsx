import React from 'react'
import './HoverButton.css'

const HoverButton = ({title, link}) => {
  return (
<button onClick={()=> console.log("link==>>", link) } class="btn_center">
    {title}
</button>

  )
}

export default HoverButton