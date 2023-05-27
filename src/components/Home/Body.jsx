import React from "react";
import styles from "../../styles/Body.module.css";
import Dummy from "../../assets/main.jpg";
import { useSpring, animated } from "react-spring";
import {Fade, Zoom} from "react-reveal";


const Body = () => {
  const props=useSpring({
    from:{opacity:0},
    to:{opacity:1},
    //try to make it when you scroll down instead
    config: {duration: 3000}
  });
  return (
    <div className={styles.body}>
      <div className={styles.headerText}>
        <div className={styles.focusBusinessIdea}>
          DEPARTMENT OF ARCHAEOLOGY GOVERNMENT OF GOA
        </div>
        <p>
          Archaeology Department headed by the Director (Add. Charge),
          undertakes village wise survey of the antiquities and also
          conservation, restoration and vegetation clearance work at the 51
          monuments/sites protected under the Goa Ancient Monuments and
          Archaeological Sites and Remains Act, 1978 and Rules, 1980. Goa has a
          rich cultural heritage & needs to be explored on scientific line
          keeping its archaeological importance. In view of this, several
          restoration works are planned to safeguard the cultural heritage for
          posterity. Regular participation in academic/research and awareness
          programs are important activities of the Unit.
        </p>
      </div>

    
  
      <div className={styles.scale2SuccessService}>
        <div className={styles.scale2SuccessServices}>
        {/* <animated.div style={props}> */}
        {/* <Fade left> */}
        <Zoom>
          <div div className={styles.scale2SuccessSingleService}>
            <div className={styles.scale2SuccessSingleServiceImage}>
              <img src={Dummy} alt="profile" />
            </div>
            <div className={styles.scale2SuccessSingleServiceDetails}>
              <h2>Protected Monuments</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
                numquam?
              </p>
              <a className={styles.detailsCTA} href="/protected-monuments">
                LEARN MORE
              </a>
            </div>
          </div>
          {/* </Fade> */}
          {/* </animated.div> */}
          {/* <Fade right> */}
          <div div className={styles.scale2SuccessSingleService}>
            <div className={styles.scale2SuccessSingleServiceImage}>
              <img src={Dummy} alt="profile" />
            </div>
            <div className={styles.scale2SuccessSingleServiceDetails}>
              <h2>Featured Monuments</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
                numquam?
              </p>
              <a className={styles.detailsCTA} href="/featured-monuments">
                LEARN MORE
              </a>
            </div>
          </div>
          {/* </Fade> */}
          {/* <Fade left> */}
          <div div className={styles.scale2SuccessSingleService}>
            <div className={styles.scale2SuccessSingleServiceImage}>
              <img src={Dummy} alt="profile" />
            </div>
            <div className={styles.scale2SuccessSingleServiceDetails}>
              <h2>Monument Details</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
                numquam?
              </p>
              <a className={styles.detailsCTA} href="/monument-list">
                LEARN MORE
              </a>
            </div>
          </div>
          {/* </Fade> */}
          {/* <Fade right> */}
          <div div className={styles.scale2SuccessSingleService}>
            <div className={styles.scale2SuccessSingleServiceImage}>
              <img src={require('../../assets/Chart.jpg')} alt="gear" />
            </div>
            <div className={styles.scale2SuccessSingleServiceDetails}>
              <h2>About Us</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
                numquam?
              </p>
              <a
                className={styles.detailsCTA}
                href="/about-us"
              >
                LEARN MORE
              </a>
            </div>
          </div>
          </Zoom>
          {/* </Fade> */}
        </div>
      </div>

      <h1 className={styles.ourFeaturedHeading}>OUR FEATURED MONUMENTS</h1>
      <div className={styles.detailsRev}>
        <Fade left duration={1200}>
        <div className={`${styles.detail} ${styles.knowMoreButtonRight} `}>
          <h2 className={styles.detailsHeader}>
            Ruins of Brahmapuri, Ella in Tiswadi
          </h2>
          <p className={styles.textLeft}>
            This Site in Ella (Old Goa) was the settlement of learned Brahmins
            from ancient times called as ‘Brahmapuri’. Shiva under the name
            “Gomanteshwar” is venerated here. The original temple is reported to
            have been constructed in the 14th Century C.E. It is believed that
            the ancient holy place of worship of Gomanteshwar was destroyed by
            the Bahamani Kings and the same was rebuilt by Madhava Mantri a
            minister of the Vijayanagar Empire. A tank near the temple is known
            as Madhava Tirth. This temple was again destroyed by the Portuguese
            during their conquest of Goa in early 16th Century C.E. Now Madhav
            Tirth and a tank exist at this site alongwith a recently built
            temple.
          </p>
          <a className={styles.detailsCTA} href="/protected-monuments">
            VISIT SITE
          </a>
        </div>
        <div>
          <img src={Dummy} className={styles.ourServicesImage} alt="shoutout" />
        </div>
        </Fade>
      </div>
      <Fade right duration={1200}>
      <div className={styles.details}>
        <div className={`${styles.detail} ${styles.knowMoreButtonLeft} `}>
          <h2 className={styles.detailsHeader}>
            Chapel of St. Xavier, Ella in Tiswadi.
          </h2>
          <p className={styles.textRight}>
            In the area near the site of the College of St. Paul, at Old Goa,
            stands a small traditional Chapel of St. Francis Xavier. As per
            popular belief, Saint Francis Xavier used to offer masses here. This
            Chapel was dedicated to Saint Francis Xavier after his canonization
            in 1622. After the College of St Paul was abandoned in 1570, the
            chapel fell into ruins and the present chapel was re-built in 1884.
            It has one altar and its architecture is of Doric order.
          </p>
          <a className={styles.detailsCTA} href="/protected-monuments">
            VISIT SITE
          </a>
        </div>
        <div>
          <img src={Dummy} className={styles.ourServicesImage} alt="product" />
        </div>
      </div>
      </Fade>
      <Fade left duration={1200}>
      <div className={styles.detailsRev}>
        <div className={`${styles.detail} ${styles.knowMoreButtonRight} `}>
          <h2 className={styles.detailsHeader}>
            Chapel of Our Lady of Monte, Ella in Tiswadi.
          </h2>
          <p className={styles.textLeft}>
            Situated on the hill, the Chapel of Our Lady of Monte was
            constructed in 1557, many years after the conquest of Goa to mark
            the place where Adil Khan took position with his artillery. It is
            called by the name of Nossa Senhora de Monte. It is situated on a
            hill which commands a picturesque view of several historical
            monuments of Old Goa.
          </p>
          <a className={styles.detailsCTA} href="/protected-monuments">
            VISIT SITE
          </a>
        </div>
        <div>
          <img src={Dummy} className={styles.ourServicesImage} alt="shoutout" />
        </div>
      </div>
      </Fade>
      <Fade right duration={1200}>
      <div className={styles.details}>
        <div className={`${styles.detail} ${styles.knowMoreButtonLeft} `}>
          <h2 className={styles.detailsHeader}>
            Ruins of College of St. Populo, Ella in Tiswadi.
          </h2>
          <p className={styles.textRight}>
            The College of St. Populo also known as Collegio de Populo was
            situated near the Convent of Augustinians. It was built in 1600 by
            the Provincial Fr. Pedro da Cruz for the training of the young
            brethren (brothers) of the Augustinian order. Group of buildings of
            Augustinians including this college were abandoned in 1835.
          </p>
          <a
            className={styles.detailsCTA}
            href="/protected-monuments"
          >
            VISIT SITE
          </a>
        </div>
        <div>
          <img src={Dummy} className={styles.ourServicesImage} alt="chart" />
        </div>
      </div>
      </Fade>
      <Fade left duration={1200}>
      <div className={styles.detailsRev}>
        <div className={`${styles.detail} ${styles.knowMoreButtonRight} `}>
          <h2 className={styles.detailsHeader}>
            Convent of St. Monica & Chapel, Ella in Tiswadi.
          </h2>
          <p className={styles.textLeft}>
            This monument is opposite to St. Augustine Tower. Foundation of this
            Convent was laid by H.H. Archbishop, Dom Fr. Aleixo de Menezes on
            2nd July 1606 and construction was completed in 1627. The Convent of
            St. Monica is the oldest and biggest nunnery in the whole of Eastern
            Asia. The Church of St. Monica (chapel of Weeping Cross) is attached
            to the Convent. The main altar is dedicated to Santa Monica, mother
            of St. Augustine while the side altars are dedicated to Divine Jesus
            and Virgin Mary. There is also an altar dedicated to Christ (Weeping
            Cross). The convent is large enough to accommodate hundred nuns.
            From 1954 the building was taken over by the Portuguese army as a
            barracks and by Indian troops in 1962 and was handed back to the
            Church in 1968.
          </p>
          <a className={styles.detailsCTA} href="/protected-monuments">
            VISIT SITE
          </a>
        </div>
        <div>
          <img src={Dummy} className={styles.ourServicesImage} alt="shoutout" />
        </div>
      </div>
      </Fade>
      <footer>
        
      </footer>
    </div>
  );
};

export default Body;
