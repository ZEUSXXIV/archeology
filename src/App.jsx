import ReactGA from 'react-ga4';
import { Button } from "antd";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";

import Payment from "./components/Payment";
import Protected from "./pages/Protected";
import Featured from "./pages/Featured";
import About from "./pages/About";
import "./styles/global.css";

import MonumentList from "./pages/MonumentList";
import Gallery from "./pages/Gallery";
import SubGallery from "./components/SubGallery";
import Ticket_Booking from "./pages/Ticket_booking";
import { Helmet } from 'react-helmet';

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";

import SimpleReactFooter from "simple-react-footer";
import MonumentPage from "./pages/MonumentPage";
import './gtag';

const App =  () => {
  // ReactGA.initialize('UA-273414908-1');
  ReactGA.initialize('G-H56ZYHKMWG')
  ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search });

  // ReactGA.pageview(window.location.pathname + window.location.search);
  <script async src="./gtag"></script>

  console.log("location==>>", window.location.href)
  const [isLoggedIn, setIsLoggedIn] = useState(
     localStorage.getItem("user-token")
  );
    
  // const PageView=()=>{
  //   const [pageviews, setPageviews] = useState(0);
  //   setPageviews((prevPageviews) => prevPageviews + 1);
  //   console.log("pageviews=>",pageviews);
  // }
  const Layout = () => {
    const Footer = () => {
      const description =
        "The Department of Archaeology is to Acquire, Protect, Preserve, Conserve/Restore, Maintain and create Awareness of the Archaeological wealth and cultural Heritage by the scientific and systematized methodology which represents the various Historical and archaeological facets of Goa, right from the time of prehistoric age up to the Portuguese period.";
      const title = "Department of Archaeology";
      const columns = [
        {
          title: "Resources",
          resources: [
            {
              name: "About",
              link: "/about-us",
            }
            
          ],
        },
        {
          title: "Monuments",
          resources: [
            {
              name: "Protected",
              link: "/protected-monuments",
            },
            {
              name: "Featured",
              link: "/featured-monuments",
            },
          ],
        },
        {
          title: "Visit",
          resources: [
            {
              name: "Gallery",
              link: "/gallery",
            },
            {
              name: "Monument Details",
              link: "/monument-list",
            },
          ],
        },
      ];

      return (
        <SimpleReactFooter
          description={description}
          title={title}
          columns={columns}
          copyright="digital archaeology"
          iconColor="white"
          backgroundColor="#24262b"
          fontColor="white"
          copyrightColor="darkgrey"
        />
      );
    };

    return (
      <>
        <Navbar />
        <Routes>
          <Route element={<Home />} exact path="/" />
          <Route element={<Featured />} exact path="/featured-monuments" />
          <Route element={<Protected />} exact path="/protected-monuments" />
          <Route element={<About />} exact path="/about-us" />
          <Route element={<MonumentList />} exact path="/monument-list" />
          <Route element={<Gallery />}  path="/gallery" />

          <Route element={<MonumentPage/>} exact path="/monument/:id" />

          <Route element={<SubGallery />} exact path="/subgallery/:id" />

          <Route
            path="/ticket_booking"
            element={
              // isLoggedIn ?
              (
                <Ticket_Booking />
              ) 
              
              // : (
              //   <Navigate to="/login" replace={true} />
              // )
            }
          />

          <Route element={<Payment />} exact path="/payment" />
        </Routes>
        <Footer />
      </>
    );
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Login />} exact path="/login" />
          <Route element={<SignUp />} exact path="/signup" />
          <Route element={<Layout />} exact path="/*" />
        </Routes>
      </Router>

      {/* <Button onClick={() => logout()}>logout</Button> */}
      {/* {isLoggedIn && <Home />} */}
    </div>
  );
};

export default App;

// import React, { useEffect } from "react";
// import Card from "./components/Card";
// import Landing from "./components/Home/Landing";
// import Navbar from "./components/Navbar";
// import Payment from "./components/Payment";
// import Protected from "./pages/Protected";
// import Featured from "./pages/Featured";
// import SimpleReactFooter from "simple-react-footer";
// import About from "./pages/About";
// import Body from "./components/Home/Body";
// import "./styles/global.css";
// import SiteTable from "./components/SiteTable";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import MonumentList from "./pages/MonumentList";
// import Gallery from "./pages/Gallery";
// import SubGallery from "./components/SubGallery";

// import Ticket_Booking from "./pages/Ticket_booking";
// import { List } from "./assets/JS Data/List";

// import axios from "axios";
// import Login from "./pages/Login";
// import SignUp from "./pages/SignUp";
// import { useState } from "react";

// const description =
//   "According to wikipedia, the cat (Felis catus) is a domestic species of small carnivorous mammal. It is the only domesticated species in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild members of the family. A cat can either be a house cat, a farm cat or a feral cat; the latter ranges freely and avoids human contact.";
// const title = "Cats";
// const columns = [
//   {
//     title: "Resources",
//     resources: [
//       {
//         name: "About",
//         link: "/about",
//       },
//       {
//         name: "Careers",
//         link: "/careers",
//       },
//       {
//         name: "Contact",
//         link: "/contact",
//       },
//       {
//         name: "Admin",
//         link: "/admin",
//       },
//     ],
//   },
//   {
//     title: "Legal",
//     resources: [
//       {
//         name: "Privacy",
//         link: "/privacy",
//       },
//       {
//         name: "Terms",
//         link: "/terms",
//       },
//     ],
//   },
//   {
//     title: "Visit",
//     resources: [
//       {
//         name: "Locations",
//         link: "/locations",
//       },
//       {
//         name: "Culture",
//         link: "/culture",
//       },
//     ],
//   },
// ];

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const checkUserToken = () => {
//     const userToken = localStorage.getItem("user-token");
//     if (!userToken || userToken === "undefined") {
//       setIsLoggedIn(false);
//     }
//     setIsLoggedIn(true);
//   };
//   useEffect(() => {
//     console.log("why are you running")
//     checkUserToken();
//   }, [isLoggedIn]);

//   return (
//     <>
//       <div
//         style={{
//           background: "rgb(255,237,204)",
//           // background: "linear-gradient(0deg, rgba(176,137,84,1) 0%, rgba(255,255,255,1) 100%)",
//           minHeight: "100vh",
//         }}
//       >
//         {/* <SubGallery/> */}

//         <Router>
//           {/* <Navbar/> */}
//           <Routes>
// <Route element={<Home />} exact path="/" />
// <Route element={<Featured />} exact path="/featured-monuments" />
// <Route element={<Protected />} exact path="/protected-monuments" />
// <Route element={<About />} exact path="/about-us" />
// <Route element={<MonumentList />} exact path="/monument-list" />
// <Route element={<Gallery />} exact path="/gallery" />

// <Route element={<SubGallery />} exact path="/subgallery/:id" />

// <Route element={<Ticket_Booking />} exact path="/ticket_booking" />

// <Route element={<Payment />} exact path="/payment" />
// <Route element={<Login />} exact path="/login" />
// <Route element={<SignUp />} exact path="/signup" />
//           </Routes>
//         </Router>

//         {/* <SimpleReactFooter
//     description={description}
//     title={title}
//     columns={columns}
//     linkedin="fluffy_cat_on_linkedin"
//     facebook="fluffy_cat_on_fb"
//     twitter="fluffy_cat_on_twitter"
//     instagram="fluffy_cat_live"
//     youtube="UCFt6TSF464J8K82xeA?"
//     pinterest="fluffy_cats_collections"
//     copyright="black"
//     iconColor="white"
//     backgroundColor="#24262b"
//     fontColor="white"
//     copyrightColor="darkgrey"

//  /> */}
//       </div>
//     </>
//   );
// };

// export default App;
