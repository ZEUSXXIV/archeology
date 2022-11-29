import styles from "../styles/Navbar.module.css";
import { motion, useScroll, useSpring } from "framer-motion";
// import ServicesDropdown from "./servicesDropdown";
import { useEffect, useState } from "react";
import { BsList, BsX } from "react-icons/bs";
import coppercodesbluelogo from "../assets/logo.png";
import coppercodeswhitelogo from "../assets/logo.png";

const Navbar = ({ from, handleClick, noline }) => {
  const [color, setColor] = useState("#28311b");
  const { scrollYProgress } = useScroll();
  const [isActive, setActive] = useState(false);
  const [isActiveServices, setActiveServices] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
    setActiveServices(false);
  };

  const scaleX = useSpring(scrollYProgress || document.body.scrollTop);

  const listenScrollEvent = (e) => {
    if (window.scrollY > 50 || document.body.scrollTop > 50) {
      setColor("white");
    } else {
      setColor("#28311b");
    }
  };

  const headerTextColor = () => {
    if (color === "white") {
      if (from === "scale2Success") {
        return "#eb7571";
      } else if (from === "launchpad") {
        return "#fec93d";
      } else {
        return "#3657B4";
      }
    } else if (color === "#28311b") {
      if (from === "marketing") {
        return "#3657B4";
      } else if (from === "humanCapital" || from === "formation") {
        return "#3657B4";
      } else {
        return "white";
      }
    }
  };

  const handleLogo = () => {
    if (color === "white") {
      return coppercodesbluelogo;
    } else if (color === "#28311b") {
      if (from === "marketing") {
        return coppercodesbluelogo;
      } else if (from === "humanCapital" || from === "formation") {
        return coppercodesbluelogo;
      } else {
        return coppercodeswhitelogo;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    document.body.addEventListener("touchmove", listenScrollEvent);

    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
      document.body.removeEventListener("touchmove", listenScrollEvent);
    };
  }, []);

  return (
    <>
      <div className={`${styles.mainMenu}  ${isActive ? styles.open : ""}`}>
        {isActive && (
          <a
            className={styles.menu}
            // style={{
            //   color: color === "white" ? "#3657B4" : "white",
            // }}
            onClick={toggleClass}
          >
            <BsX color="white" size="3rem" />
          </a>
        )}
        <ul>
          <li>
            <a>HOME</a>
          </li>
          <li>
            <a>PROTECTED MONUMENTS</a>
          </li>
          <li>
            <a>FEATURED MONUMENTS</a>
          </li>
          <li>
            <a>MONUMENT DETAILS</a>
          </li>
          <li>
            <a>GALLERY</a>
          </li>
          <li>
            <a>ABOUT US</a>
          </li>

          {/* {from === "index" ? (
            <li>
              <a onClick={handleClick}>CONTACT US</a>
            </li>
          ) : null} */}
        </ul>
      </div>
      <div
        className={styles.header}
        style={{
            background:'#333230'
        //   backgroundColor: color,
        // background: "radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)",
        //   boxShadow: color === "white" ? "0 0.5px 5px #888888" : "none",
        }}
      >
        <div className={styles.logoList}>
          <div className={styles.logo}>
            {/* <a style={{ color: headerTextColor() }} href="/">
              COPPERCODES <span>CONSULTING</span>
            </a> */}
            <a
              onClick={() => {
                sessionStorage.setItem("location", "https://coppercodes.com/");
                window.location.href = "/";
              }}
            >

              <img
                loading="eager"
                src={handleLogo()}
                alt="logo"
                className={styles.navLogo}
              />
                
            </a>
          </div>
          {/* <Typography style={{maxWidth:'15%', color:'#fff'}}>
                    DIRECTORATE OF ARCHEOLOGY GOVERNMENT OF GOA
                </Typography> */}
          <div className={styles.items}>
            <ul style={{
                 color: headerTextColor() 
                 }}>
              <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <a
                  style={{ color: headerTextColor() }}
                  //   href="https://devlabs.coppercodes.com/about-us/"
                  target="_blank"
                  rel="noreferrer"
                >
                  HOME
                </a>
              </motion.li>

              <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <a
                  style={{ color: headerTextColor() }}
                  href="https://devlabs.coppercodes.com/about-us/"
                  target="_blank"
                  rel="noreferrer"
                >
                  PROTECTED MONUMENTS
                </a>
              </motion.li>

              <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <a
                  style={{ color: headerTextColor() }}
                  href="https://devlabs.coppercodes.com/about-us/"
                  target="_blank"
                  rel="noreferrer"
                >
                  FEATURED MONUMENTS
                </a>
              </motion.li>

              <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <a
                  style={{ color: headerTextColor() }}
                  href="https://devlabs.coppercodes.com/about-us/"
                  target="_blank"
                  rel="noreferrer"
                >
                  MONUMENT DETAILS
                </a>
              </motion.li>

              <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <a
                  style={{ color: headerTextColor() }}
                  href="https://devlabs.coppercodes.com/about-us/"
                  target="_blank"
                  rel="noreferrer"
                >
                  GALLERY
                </a>
              </motion.li>

              <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <a
                  style={{ color: headerTextColor() }}
                  href="https://devlabs.coppercodes.com/about-us/"
                  target="_blank"
                  rel="noreferrer"
                >
                  ABOUT US
                </a>
              </motion.li>

              {from === "index" ? (
                <motion.li
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <a onClick={handleClick} style={{ color: headerTextColor() }}>
                    CONTACT US
                  </a>
                </motion.li>
              ) : null}
            </ul>
          </div>
        </div>
        <motion.div
          className={styles.career}
          // style={{ backgroundColor: "red" }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        >
          {/* <a className={styles.link} style={{ color: headerTextColor() }}>
            CAREER
          </a> */}
          <a
            className={styles.menu}
            style={{
              color: headerTextColor(),
            }}
            onClick={toggleClass}
          >
            <BsList color={headerTextColor()} size="1.4rem" />
            {/* <Image
              src={hamburger}
              alt="hamburger"
              width={35}
              height={35}
              style={{ backgroundColor: headerTextColor() }}
            /> */}
          </a>
        </motion.div>

        {/* {noline != "true" && (
          <motion.div
            className={styles.progress}
            style={{
              scaleX,
              position: "absolute",
              bottom: 0,
              left: 0,
              backgroundColor: headerTextColor(),
              width: "100%",
              transformOrigin: "0%",
              height: "2px",
            }}
          />
        )} */}
      </div>
    </>
  );
};

export default Navbar;
