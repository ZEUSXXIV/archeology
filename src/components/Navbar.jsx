import styles from "../styles/Navbar.module.css";
import { motion } from "framer-motion";
// import ServicesDropdown from "./servicesDropdown";
import { useState } from "react";
import { BsList, BsX } from "react-icons/bs";
import coppercodeswhitelogo from "../assets/logo.png";

const Navbar = () => {
  const [color, setColor] = useState("#28311b");
  const [isActive, setActive] = useState(false);
  const [isActiveServices, setActiveServices] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
    setActiveServices(false);
  };

  const headerTextColor = () => "#185763";

  const handleLogo = () => coppercodeswhitelogo;

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
            <a href="/protected-monuments">PROTECTED MONUMENTS</a>
          </li>
          <li>
            <a href="/featured-monuments">FEATURED MONUMENTS</a>
          </li>
          <li>
            <a href="/monument-list">MONUMENT DETAILS</a>
          </li>
          {/* <li>
            <a>GALLERY</a>
          </li> */}
          <li>
            <a href="/about-us">ABOUT US</a>
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
          background: "white",
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
            <ul
              style={{
                color: headerTextColor(),
              }}
            >
              <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <a
                  style={{ color: headerTextColor() }}
                  href="/"
                  //target="_blank"
                  rel="noreferrer"
                >
                  HOME
                </a>
              </motion.li>

              <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <a
                  style={{ color: headerTextColor() }}
                  href="/protected-monuments"
                  //target="_blank"
                  rel="noreferrer"
                >
                  PROTECTED MONUMENTS
                </a>
              </motion.li>

              <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <a
                  style={{ color: headerTextColor() }}
                  href="featured-monuments"
                  //target="_blank"
                  rel="noreferrer"
                >
                  FEATURED MONUMENTS
                </a>
              </motion.li>

              <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <a
                  style={{ color: headerTextColor() }}
                  href="/monument-list"
                  //target="_blank"
                  rel="noreferrer"
                >
                  MONUMENT DETAILS
                </a>
              </motion.li>

              {/* <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <a
                  style={{ color: headerTextColor() }}
                  href="/gallery"
                  //target="_blank"
                  rel="noreferrer"
                >
                  GALLERY
                </a>
              </motion.li> */}

              <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <a
                  style={{ color: headerTextColor() }}
                  href="/about-us"
                  //target="_blank"
                  rel="noreferrer"
                >
                  ABOUT US
                </a>
              </motion.li>
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
      <div 
      // style={{ height: "2px", backgroundColor: "blue" }}
      className={styles.progressBar}
       />
    </>
  );
};

export default Navbar;
