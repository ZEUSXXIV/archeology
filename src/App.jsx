import React from 'react'
import Card from './components/Card'
import Landing from './components/Home/Landing'
import Navbar from './components/Navbar'
import Protected from './pages/Protected'
import Featured from './pages/Featured'
import SimpleReactFooter from "simple-react-footer";
import About from './pages/About'
import Body from './components/Home/Body'
import './styles/global.css'
import SiteTable from './components/SiteTable'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MonumentList from './pages/MonumentList'
import Gallery from './pages/Gallery'
import SubGallery from './components/SubGallery'
import Ticket_booking from './pages/Ticket_booking'

const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus magni nisi laudantium deleniti repellendus incidunt odio consequuntur deserunt cum, obcaecati doloribus aliquid culpa voluptates architecto delectus dignissimos sunt voluptas dolore? Modi tempora voluptate error accusamus eum sequi ducimus asperiores quo voluptatibus, dicta cupiditate iure ea, repellat consectetur necessitatibus minus incidunt?";
const title = "Archaeology";
const columns = [
  {
      title: "Resources",
      resources: [
          {
              name: "About",
              link: "/about"
          },
          {
              name: "Careers",
              link: "/careers"
          },
          {
              name: "Contact",
              link: "/contact"
          },
          {
              name: "Admin",
              link: "/admin"
          }
      ]
  },
  {
      title: "Legal",
      resources: [
          {
              name: "Privacy",
              link: "/privacy"
          },
          {
              name: "Terms",
              link: "/terms"
          }
      ]
  },
  {
      title: "Visit",
      resources: [
          {
              name: "Locations",
              link: "/locations"
          },
          {
              name: "Culture",
              link: "/culture"
          }
      ]
  }
];

const App = () => {
  return (
    <>
    <div 
    style={{
      background:"#24262b",
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
          <Route element={<SubGallery/>} exact path='/subgallery/:id' />
          <Route element={<Ticket_booking/>} exact path='/ticket_booking' />

        </Routes>
      </Router>
   

 
  <SimpleReactFooter 
    style={{marginTop:"0px"}}
    description={description} 
    title={title}
    columns={columns}
    linkedin="linkedin"
    facebook="fb"
    twitter="twitter"
    instagram="live"
    youtube=""
    copyright="black"
    iconColor="white"
    backgroundColor="#24262b"
    fontColor="white"
    copyrightColor="darkgrey"
    
    
      
 />

    
    
    </div>
    </>
  )
}

export default App