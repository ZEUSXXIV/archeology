import React from "react";
import styles from "../../styles/Body.module.css";
import Dummy from "../../assets/main.jpg";

import { useSpring, animated } from "react-spring";

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
          <div div className={styles.scale2SuccessSingleService}>
            <div className={styles.scale2SuccessSingleServiceImage}>
              <img src={require('../../assets/Pics/16 Church of Reis Magos.jpg')} alt="profile" />
            </div>
            <div className={styles.scale2SuccessSingleServiceDetails}>
              <h2>Protected Monuments</h2>
              <p>
                Check out all the protected monuments
              </p>
              <a className={styles.detailsCTA} href="/protected-monuments">
                LEARN MORE
              </a>
            </div>
          </div>
          <div div className={styles.scale2SuccessSingleService}>
            <div className={styles.scale2SuccessSingleServiceImage}>
              <img src={require('../../assets/Pics/03 Chapel of our lady  of monte Old Goa.jpg')} alt="profile" />
            </div>
            <div className={styles.scale2SuccessSingleServiceDetails}>
              <h2>Featured Monuments</h2>
              <p>
                Check out the featured monuments
              </p>
              <a className={styles.detailsCTA} href="/featured-monuments">
                LEARN MORE
              </a>
            </div>
          </div>
          <div div className={styles.scale2SuccessSingleService}>
            <div className={styles.scale2SuccessSingleServiceImage}>
              <img src={require('../../assets/monument_details_table.png')} alt="profile" />
            </div>
            <div className={styles.scale2SuccessSingleServiceDetails}>
              <h2>Monument Details</h2>
              <p>
                Know the official monument details
              </p>
              <a className={styles.detailsCTA} href="/monument-list">
                LEARN MORE
              </a>
            </div>
          </div>
          <div div className={styles.scale2SuccessSingleService}>
            <div className={styles.scale2SuccessSingleServiceImage}>
              <img src={require('../../assets/Chart.jpg')} alt="gear" />
            </div>
            <div className={styles.scale2SuccessSingleServiceDetails}>
              <h2>About Us</h2>
              <p>About the organisation
              </p>
              <a
                className={styles.detailsCTA}
                href="/about-us"
              >
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
      </div>

      <h1 className={styles.ourFeaturedHeading}>OUR FEATURED MONUMENTS</h1>
      <div className={styles.detailsRev}>
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
          <img src={require('../../assets/Pics/01 Ruins of Brahmapuri old Goa.jpg')} className={styles.ourServicesImage} alt="shoutout" />
        </div>
      </div>
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
          <img src={require('../../assets/Pics/02 Chapel of St Xavier old Goa.jpg')} className={styles.ourServicesImage} alt="product" />
        </div>
      </div>
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
          <img src={require('../../assets/Pics/03 Chapel of our lady  of monte Old Goa.jpg')} className={styles.ourServicesImage} alt="shoutout" />
        </div>
      </div>
      <div className={styles.details}>
        <div className={`${styles.detail} ${styles.knowMoreButtonLeft} `}>
          <h2 className={styles.detailsHeader}>
          Temple of Saptakoteswar, Narve in Bicholi
          </h2>
          <p className={styles.textRight}>
          This is a temple dedicated to Shiva, worshipped in the form of a Linga as Saptakoteshwar.  
          It was originally situated at Naroa, Diwar.  During the Portuguese persecution it was shifted to Narve Bicholim where Chhatrapati Shivaji, the great Maratha ruler ordered its construction on 13th November 1668.  The interior walls of the temple are decorated with kaavi art.  In the sabhamandap there is a black stone (granite) image of Nandi facing the Shivlinga.  Above the entrance door of the sabhamandap is the inscription of Chhatrapati Shivaji.  In front of the temple there is a deepsthamba with Nagabandha. 
          </p>
          <a
            className={styles.detailsCTA}
            href="/protected-monuments"
          >
            VISIT SITE
          </a>
        </div>
        <div>
          <img src={require('../../assets/Pics/20 Temple of Saptakoteshwar, Narve Bicholim.jpg')} className={styles.ourServicesImage} alt="chart" />
        </div>
      </div>
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
          <img src={require('../../assets/Pics/04 St Monica old Goa.jpg')} className={styles.ourServicesImage} alt="shoutout" />
        </div>
      </div>
      <footer>
        
      </footer>
    </div>
  );
};

export default Body;
