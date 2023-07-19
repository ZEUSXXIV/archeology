import React, { useEffect, useState } from "react";
import styles from "../../styles/Body.module.css";
import Dummy from "../../assets/main.jpg";
import { useSpring, animated } from "react-spring";
// import Top from "./Top";
import axios from "axios";

// const Body = () => {
// const [top, setTop ] = useState([]);
// const [mainImage, setMainImage] = useState("")
// const props=useSpring({
//   from:{opacity:0},
//   to:{opacity:1},

const Body = () => {
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    //try to make it when you scroll down instead
    config: { duration: 3000 },
  });
  // useEffect(() => {
  //   console.log("id==>>", item._id);

  //   axios
  //     .get(`http://localhost:5000/api/v1/gallery/${item._id}`)
  //     .then((res, err) => {
  //       if (err) {
  //         console.log("err", err);
  //         return
  //       }
  //       setMainImage(res.data[0].main_img)
  //     });

  //   axios
  //     .get(`http://localhost:5000/google/top`)
  //     .then((res, err) => {
  //       if (err) {
  //         console.log("err", err);
  //       }

  //       console.log(res.data);
  //       setTop(res.data[0]);
  //     });

  // }, []);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/google/ga4monu"
        );

        const topPages = response.data.response.rows;

        console.log("topPages==>>", topPages);

        var updatedRows = topPages.filter((item) =>
          item.dimensionValues[0].value.includes("/monument/")
        );

        updatedRows = updatedRows.filter((item) => {
          if (
            item.dimensionValues[0].value !== "/monument/protected-monuments" &&
            item.dimensionValues[0].value !== "/monument/featured-monuments"
          )
            return item;
        });

        updatedRows.sort(
          (a, b) => a.metricValues[2].value - b.metricValues[2].value
        );

        console.log("updated rows==>>", updatedRows);

        const temp = await Promise.all(
          updatedRows.map(async (item) => {
            const id = item.dimensionValues[0].value.replace("/monument/", "");

            const res = await axios.get(
              `http://localhost:5000/api/v1/monument/${id}`
            );
            const gallery = await axios.get(
              `http://localhost:5000/api/v1/gallery/${id}`
            );

            var resp = res.data[0];
            resp.imageUrl = gallery.data[0]?.main_img;

            return resp;
          })
        );

        console.log("temp==>>", temp);

        setData(temp);

        // setPieChartData(temp.filter((item) => item.name !== undefined));
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.body}>
      <div className={styles.headerText}>
        <div className={styles.focusBusinessIdea}>
          DEPARTMENT OF ARCHAEOLOGY GOVERNMENT OF GOA
        </div>
        <p>
          Archaeology Department headed by the Director Dr. Nilesh B. Fal
          Dessai, undertakes village wise survey of the antiquities and also
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
              <img
                src={require("../../assets/Pics/16 Church of Reis Magos.jpg")}
                alt="profile"
              />
            </div>
            <div className={styles.scale2SuccessSingleServiceDetails}>
              <h2>Protected Monuments</h2>
              <p>Check out all the protected monuments</p>
              <a className={styles.detailsCTA} href="/protected-monuments">
                LEARN MORE
              </a>
            </div>
          </div>
          <div div className={styles.scale2SuccessSingleService}>
            <div className={styles.scale2SuccessSingleServiceImage}>
              <img
                src={require("../../assets/Pics/03 Chapel of our lady  of monte Old Goa.jpg")}
                alt="profile"
              />
            </div>
            <div className={styles.scale2SuccessSingleServiceDetails}>
              <h2>Featured Monuments</h2>
              <p>Check out the featured monuments</p>
              <a className={styles.detailsCTA} href="/featured-monuments">
                LEARN MORE
              </a>
            </div>
          </div>
          <div div className={styles.scale2SuccessSingleService}>
            <div className={styles.scale2SuccessSingleServiceImage}>
              <img
                src={require("../../assets/monument_details_table.png")}
                alt="profile"
              />
            </div>
            <div className={styles.scale2SuccessSingleServiceDetails}>
              <h2>Monument Details</h2>
              <p>Know the official monument details</p>
              <a className={styles.detailsCTA} href="/monument-list">
                LEARN MORE
              </a>
            </div>
          </div>
          <div div className={styles.scale2SuccessSingleService}>
            <div className={styles.scale2SuccessSingleServiceImage}>
              <img src={require("../../assets/Chart.jpg")} alt="gear" />
            </div>
            <div className={styles.scale2SuccessSingleServiceDetails}>
              <h2>About Us</h2>
              <p>About the organisation</p>
              <a className={styles.detailsCTA} href="/about-us">
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
            {/* Ruins of Brahmapuri, Ella in Tiswadi */}
            {data[0]?.site}
          </h2>
          <p className={styles.textLeft}>
            {/* This Site in Ella (Old Goa) was the settlement of learned Brahmins
            from ancient times called as ‘Brahmapuri’. Shiva under the name
            “Gomanteshwar” is venerated here. The original temple is reported to
            have been constructed in the 14th Century C.E. It is believed that
            the ancient holy place of worship of Gomanteshwar was destroyed by
            the Bahamani Kings and the same was rebuilt by Madhava Mantri a
            minister of the Vijayanagar Empire. A tank near the temple is known
            as Madhava Tirth. This temple was again destroyed by the Portuguese
            during their conquest of Goa in early 16th Century C.E. Now Madhav
            Tirth and a tank exist at this site alongwith a recently built
            temple. */}
            {data[0]?.description}
          </p>
          <a className={styles.detailsCTA} href={`/monument/${data[0]?._id}`}>
            VISIT SITE
          </a>
        </div>
        <div>
          <img
            // src={require("../../assets/Pics/01 Ruins of Brahmapuri old Goa.jpg")}
            src={data[0]?.imageUrl}
            className={styles.ourServicesImage}
            alt="shoutout"
          />
        </div>
      </div>
      <div className={styles.details}>
        <div className={`${styles.detail} ${styles.knowMoreButtonLeft} `}>
          <h2 className={styles.detailsHeader}>{data[1]?.site}</h2>
          <p className={styles.textRight}>{data[1]?.description}</p>
          <a className={styles.detailsCTA} href={`/monument/${data[1]?._id}`}>
            VISIT SITE
          </a>
        </div>
        <div>
          <img
            src={data[1]?.imageUrl}
            className={styles.ourServicesImage}
            alt="product"
          />
        </div>
      </div>
      <div className={styles.detailsRev}>
        <div className={`${styles.detail} ${styles.knowMoreButtonRight} `}>
          <h2 className={styles.detailsHeader}>{data[2]?.site}</h2>
          <p className={styles.textLeft}>{data[2]?.description}</p>
          <a className={styles.detailsCTA} href={`/monument/${data[2]?._id}`}>
            VISIT SITE
          </a>
        </div>
        <div>
          <img
            src={data[2]?.imageUrl}
            className={styles.ourServicesImage}
            alt="shoutout"
          />
        </div>
      </div>
      <div className={styles.details}>
        <div className={`${styles.detail} ${styles.knowMoreButtonLeft} `}>
          <h2 className={styles.detailsHeader}>{data[3]?.site}</h2>
          <p className={styles.textRight}>{data[3]?.description}</p>
          <a className={styles.detailsCTA} href={`/monument/${data[3]?._id}`}>
            VISIT SITE
          </a>
        </div>
        <div>
          <img
            src={data[3]?.imageUrl}
            className={styles.ourServicesImage}
            alt="chart"
          />
        </div>
      </div>
      <div className={styles.detailsRev}>
        <div className={`${styles.detail} ${styles.knowMoreButtonRight} `}>
          <h2 className={styles.detailsHeader}>
            {/* Convent of St. Monica & Chapel, Ella in Tiswadi. */}
            {data[4]?.site}
          </h2>
          <p className={styles.textLeft}>{data[4]?.description}</p>
          <a className={styles.detailsCTA} href={`/monument/${data[4]?._id}`}>
            VISIT SITE
          </a>
        </div>
        <div>
          <img
            src={data[4]?.imageUrl}
            className={styles.ourServicesImage}
            alt="shoutout"
          />
        </div>
      </div>
      {/*top.map((monu) => {
      //   console.log("monu==>>", monu);
      //   return (
      //     <div key={monu.site}>
      //       <Top item={monu} />
      //     </div>
      //   );
      // })}*/}
      <footer></footer>
    </div>
  );
};

export default Body;
