import React from 'react'
import Card from './components/Card'
import Landing from './components/Home/Landing'
import Navbar from './components/Navbar'
import Protected from './pages/Protected'
import Featured from './pages/Featured'
import About from './pages/About'
import Body from './components/Home/Body'
import './styles/global.css'

const App = () => {
  return (
    <>
    <div style={{backgroundColor:'#ccc'}}>
    <Navbar/>
    <Landing/>
    <Body/>
    {/* <Featured />
    <Protected />
    <Landing/>
    <Card/>
    <About /> */}
    </div>
    </>
  )
}

export default App