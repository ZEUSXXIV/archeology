import React from 'react'
import Card from './components/Card'
import Landing from './components/Home/Landing'
import Navbar from './components/Navbar'
import Protected from './pages/Protected'
import Featured from './pages/Featured'
import About from './pages/About'
import Body from './components/Home/Body'
import './styles/global.css'
import SiteTable from './components/SiteTable'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MonumentList from './pages/MonumentList'
import Gallery from './pages/Gallery'
import SubGallery from './components/SubGallery'



const App = () => {
  return (
    <>
    <div 
    style={{
      background: "rgb(255,237,204)",
      // background: "linear-gradient(0deg, rgba(176,137,84,1) 0%, rgba(255,255,255,1) 100%)",
      minHeight:'100vh'}}
    >

    {/* <SubGallery/> */}
      
      <Router>
      <Navbar/>
        <Routes>
          <Route element={<Home/>} exact path='/' />
          <Route element={<Featured/>} exact path='/featured-monuments' />
          <Route element={<Protected/>} exact path='/protected-monuments' />
          <Route element={<About/>} exact path='/about-us' />
          <Route element={<MonumentList/>} exact path='/monument-list' />
          <Route element={<Gallery/>} exact path='/gallery' />
          <Route element={<SubGallery/>} exact path='/subgallery' />
        </Routes>
      </Router>
    
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