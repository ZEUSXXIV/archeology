import React from "react";
import { useState} from "react";
import pics from "../assets/JS Data/Gallery";
import SubGallery from "../components/SubGallery"
import Gallery_component from "../components/Gallery_component";
import { Typography } from "antd";

const Gallery = () => {
        const [activeItem, setActiveItem] = useState(null);
        return(
  <>
  
    <Typography style={{fontWeight:'600', fontSize:'36px', textAlign:'center',paddingTop:'2%', paddingBottom:'2%'}} >Gallery</Typography>
   <div
   style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "15px",
        justifyContent: "center",
        alignItems: "center",
      }}>
    {pics.map((item) => (
            <div  onClick={() => {
                setActiveItem(item);
                // setIsModalOpen(true)
              }}>{!activeItem &&
              <Gallery_component
                Title={item.Title}
                mainImg={item.mainImg}
                key={item.Title}
              />}
            </div>
          ))}
        <div>{activeItem && <SubGallery Title={activeItem?.Title}/>}</div> 
        </div>


      {/* <div >
              <img src={MainImage} style={{borderRadius: '20',height:"250px",width:"300px"}} />
      </div>
      <div className={`${Styles.label}`}>
              <Typography>Reis Magos Church</Typography>
      </div>
    </div>
    <div className={`${Styles.monu}`}>
      <div >
              <img src={MainImage} style={{borderRadius: '20',height:"250px",width:"300px"}} />
      </div>
      <div className={`${Styles.label}`}>
              <Typography>Reis Magos Church</Typography>
      </div>
    </div><div className={`${Styles.monu}`}>
      <div >
              <img src={MainImage} style={{borderRadius: '20',height:"250px",width:"300px"}} />
      </div>
      <div className={`${Styles.label}`}>
              <Typography>Reis Magos Church</Typography>
      </div>
    </div><div className={`${Styles.monu}`}>
      <div >
              <img src={MainImage} style={{borderRadius: '20',height:"250px",width:"300px"}} />
      </div>
      <div className={`${Styles.label}`}>
              <Typography>Reis Magos Church</Typography>
      </div>
    </div> */}
   
  </>)
};

export default Gallery;
