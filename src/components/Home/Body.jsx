import React from "react";
import styles from "../../styles/Body.module.css";
import Dummy from "../../assets/main.jpg";

const Body = () => {
  return (
    <div className={styles.body}>
      <div className={styles.headerText}>
        <div className={styles.focusBusinessIdea}>
          DIRECTORATE OF ARCHEOLOGY GOVERNMENT OF GOA
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          tempore dolorem quibusdam molestiae odio labore rem cupiditate ipsum
          libero! Necessitatibus soluta temporibus quod illum reprehenderit
          corporis quo sapiente debitis odit! Aliquam doloremque totam
          obcaecati, consequuntur esse accusantium! Sequi quo nemo delectus
          voluptatem, esse perspiciatis quam ducimus repellendus, voluptate
          laborum dolore.
        </p>
      </div>

      {/* <div className={styles.launchpadService}>
        <h1>
          LaunchPad<sup className={styles.serviceMark}>SM</sup>
        </h1>
        <p className={styles.launchpadSubtitle}>
          Our LaunchPad<sup>SM</sup> solution is designed for new and
          early-stage startups.
        </p>
        <div className={styles.launchpadServices}>
          <div className={styles.launchpadSingleService}>
            <div className={styles.launchpadSingleServiceImage}>
              <img src={Dummy} alt="bulb" />
            </div>
            <div className={styles.launchpadSingleServiceDetails}>
              <h2>Formation</h2>
              <p>
                Legal Registration, Business/Capital Structure, Vendor Selection
                & more
              </p>
              <a className={styles.detailsCTA} href="/formation">
                LEARN MORE
              </a>
            </div>
          </div>

          <div div className={styles.launchpadSingleService}>
            <div className={styles.launchpadSingleServiceImage}>
              <img src={Dummy} alt="Dartboard" />
            </div>
            <div className={styles.launchpadSingleServiceDetails}>
              <h2>Branding</h2>
              <p>
                Brand Strategy, Logo, Website Design/Development, Digital
                Content & more
              </p>
              <a className={styles.detailsCTA} href="/branding">
                LEARN MORE
              </a>
            </div>
          </div>

          <div div className={styles.launchpadSingleService}>
            <div className={styles.launchpadSingleServiceImage}>
              <img src={Dummy} alt="mic" />
            </div>
            <div className={styles.launchpadSingleServiceDetails}>
              <h2>Marketing</h2>
              <p>
                Social Media, SEO, Paid Search (PPC/SERP), Content Marketing &
                more
              </p>
              <a className={styles.detailsCTA} href="/marketing">
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
      </div> */}

      <div className={styles.scale2SuccessService}>
        {/* <h1>
          Scale2Success
          <sup className={styles.serviceMark}>SM</sup>
        </h1> */}
        {/* <p className={styles.scale2SuccessSubtitle}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta quam aliquam eos dicta .
        </p> */}
        <div className={styles.scale2SuccessServices}>
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
              <a className={styles.detailsCTA} href="/humancapital">
                LEARN MORE
              </a>
            </div>
          </div>
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
              <a className={styles.detailsCTA} href="/humancapital">
                LEARN MORE
              </a>
            </div>
          </div>

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
              <a className={styles.detailsCTA} href="/humancapital">
                LEARN MORE
              </a>
            </div>
          </div>
          <div div className={styles.scale2SuccessSingleService}>
            <div className={styles.scale2SuccessSingleServiceImage}>
              <img src={Dummy} alt="gear" />
            </div>
            <div className={styles.scale2SuccessSingleServiceDetails}>
              <h2>About Us</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
                numquam?
              </p>
              <a
                className={styles.detailsCTA}
                href="https://devlabs.coppercodes.com/"
                rel="noreferrer"
                target="_blank"
              >
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
      </div>

      <h1 className={styles.ourFeaturedHeading}>OUR FEATURED MONUMENTS</h1>
      <div className={styles.details}>
        <div className={`${styles.detail} ${styles.knowMoreButtonLeft} `}>
          <h2 className={styles.detailsHeader}>Lorem Ipsum</h2>
          <p className={styles.textRight}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quis
            blanditiis veritatis, dolores repellat voluptatibus perspiciatis
            quasi. Repellendus eos ipsa deleniti, ducimus, placeat ea veniam
            tempora voluptas velit, maxime labore. Animi sint error laborum,
            voluptates optio possimus ipsum officia nostrum ut culpa accusamus
            quia harum aliquid molestiae, perferendis, officiis dolores.
          </p>
          <a className={styles.detailsCTA} href="/marketing">
            LEARN MORE
          </a>
        </div>
        <div>
          <img src={Dummy} className={styles.ourServicesImage} alt="product" />
        </div>
      </div>
      <div className={styles.detailsRev}>
        <div className={`${styles.detail} ${styles.knowMoreButtonRight} `}>
          <h2 className={styles.detailsHeader}>Lorem Ipsum</h2>
          <p className={styles.textLeft}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex error
            laborum quia assumenda animi asperiores accusamus explicabo quos
            placeat qui expedita maiores enim quo distinctio facere vitae
            repudiandae, dicta dolor aliquam atque ea suscipit maxime. Obcaecati
            minima quas iure iusto veniam soluta. Iusto quibusdam laboriosam
            fugit fuga consectetur quas maxime.
          </p>
          <a className={styles.detailsCTA} href="/branding">
            LEARN MORE
          </a>
        </div>
        <div>
          <img src={Dummy} className={styles.ourServicesImage} alt="shoutout" />
        </div>
      </div>
      <div className={styles.details}>
        <div className={`${styles.detail} ${styles.knowMoreButtonLeft} `}>
          <h2 className={styles.detailsHeader}>Lorem Ipsum</h2>
          <p className={styles.textRight}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            doloribus excepturi voluptates omnis, odit quos delectus eaque
            voluptate tenetur qui neque voluptatem. Nostrum, repellat ipsam.
            Sint quis provident et possimus atque reprehenderit, enim illo
            inventore voluptatum repellendus laborum vel laboriosam quibusdam
            officiis maiores sequi tenetur molestiae facilis, ipsam fugit fuga!
          </p>
          <a
            rel="noreferrer"
            className={styles.detailsCTA}
            href="https://devlabs.coppercodes.com/"
            target="_blank"
          >
            LEARN MORE
          </a>
        </div>
        <div>
          <img src={Dummy} className={styles.ourServicesImage} alt="chart" />
        </div>
      </div>
      <div className={styles.detailsRev}>
        <div className={`${styles.detail} ${styles.knowMoreButtonRight} `}>
          <h2 className={styles.detailsHeader}>Lorem Ipsum</h2>
          <p className={styles.textLeft}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit saepe voluptas consectetur ea voluptatum aliquam est a
            dolor necessitatibus similique libero maiores, mollitia enim
            possimus pariatur odio? Provident dignissimos aut, totam minima modi
            fugiat harum illum eligendi itaque voluptatibus cupiditate ad nulla,
            quia error incidunt tempora eaque deserunt? Dolorem, facere.
          </p>
          <a className={styles.detailsCTA} href="/humancapital">
            LEARN MORE
          </a>
        </div>
        <div>
          <img src={Dummy} className={styles.ourServicesImage} alt="shoutout" />
        </div>
      </div>
      {/* <div className={styles.detailsRev}>
          <div className={`${styles.detail} ${styles.knowMoreButtonRight} `}>
            <h2 className={styles.detailsHeader}>
              Lorem Ipsum is simply dummy text of the printing
            </h2>
            <p className={styles.textLeft}>
              Your customers will experience the highest level of user
              experience and satisfaction with the apps and custom software that
              we build for you. Ease of use, simplistic design, and outstanding
              functionality are what we swear by. Be rest assured of an
              increased business reach and digital excellence with our mobile
              development, web app development, and software development.
            </p>
            <a className={styles.detailsCTA}>LEARN MORE</a>
          </div>
          <div>
            <Image src={mountain} width={550} height={500} alt="Mountain" />
          </div>
        </div> */}
    </div>
  );
};

export default Body;
