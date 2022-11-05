import React from 'react'
import Card from './components/Card'
import Landing from './components/Home/Landing'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
    <div style={{backgroundColor:'#ccc'}}>
    <Navbar/>
    <Landing/>
    {/* <Landing/> */}
    {/* <Card/> */}
    </div>
    </>
  )
}

export default App