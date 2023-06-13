import React, { useEffect, useState } from "react";
import Styles from "../styles/Ticket_Booking.module.css";
import { useForm } from "react-hook-form";
import { Carousel } from "react-responsive-carousel";
import { Empty, Modal } from "antd";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Main1 from "../assets/main1.jpg";
import Img01 from "../assets/Pics/03 Chapel of our lady  of monte Old Goa.jpg";
import Img02 from "../assets/Pics/04 St Monica old Goa.jpg";
import Img03 from "../assets/Pics/37 Fort of Cabo de Rama, Cancona.jpg";
import Img04 from "../assets/Pics/16 Church of Reis Magos.jpg";
import "react-datepicker/dist/react-datepicker.css";

import { Select, Space } from "antd";

import { Swiper, SwiperSlide, Autoplay } from "swiper/react";
import "swiper/css";
import axios from "axios";

export function Error({ errors }) {
  return (
    <div className={`${Styles.error}`}>
      <div className={"error"}>{errors ? errors.message : " "}</div>
    </div>
  );
}
const Ticket_Booking = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [value, setValue] = useState();

  const [Data, setData] = useState([]);


  const [selectedMonumentId, setSelectedMonumentId] = useState(null)

  const handleChange = (value) => {
    console.log(`selected ${value}`);
    setSelectedMonumentId(value)
  };

  useEffect(() => {
    axios.get(`http://localhost:5000/api/v1/monument`).then((res) => {
      console.log(res.data);
      let temp = []
      res.data.map((item)=>{
        temp.push({
          value: item._id,
          label: item.site
        })
      })

      setData(temp);

    });

    

  }, []);

 async function  saveData () {
    // console.log("data==>>",data);

    const req = {
      uid: await localStorage.getItem("user-token"),
      name: value.name,
      phone: value.contact,
      email: value.email,
      date: value.date,
      tickets: parseInt(value.ticket),
      monument_id: selectedMonumentId,
      isActive: 1,
      status: "ongoing",
    };

    console.log("req==>>", req);

    axios.post("http://localhost:5000/api/v1/ticket", req).then((res, err) => {
      if (err) {
        console.log("err", err);
      }

      console.log(res.data);
      // setData(res.data)
    });
  }
  return (
    <div className={`${Styles.Container}`}>
      <div className={`${Styles.Form}`}>
        <h1 className={`${Styles.Title}`}>Ticket Booking</h1>

        <label className={`${Styles.Label}`}>
          Name <Error errors={errors.name} />
        </label>
        <input
          className={`${Styles.FormItem}`}
          name="name"
          {...register("name", { required: "*Please Enter Your Name" })}
        ></input>

        <label className={`${Styles.Label}`}>
          Contact Info <Error errors={errors.contact} />
        </label>
        <input
          className={`${Styles.FormItem}`}
          name="contact"
          {...register("contact", { required: "*Details Required" })}
        ></input>

        <label className={`${Styles.Label}`}>
          Email <Error errors={errors.email} />
        </label>
        <input
          className={`${Styles.FormItem}`}
          name="email"
          {...register("email", { required: "*Details Required" })}
        ></input>

        <label className={`${Styles.Label}`}>
          Date <Error errors={errors.date} />
        </label>
        <input
          placeholder="Date"
          className={`${Styles.FormItem}`}
          type="date"
          name="date"
          {...register("date", { required: "*Details Required" })}
        ></input>

        <label className={`${Styles.Label}`}>
          No. of Tickets <Error errors={errors.ticket} />
        </label>
        <input
          className={`${Styles.FormItem}`}
          type="number"
          name="ticket"
          placeholder="No. of Ticket"
          {...register("ticket", { required: "*Details Required" })}
        />

        <label className={`${Styles.Label}`}>
          Site <Error errors={errors.site} />
        </label>
        {/* <input
          className={`${Styles.FormItem}`}
          name="site"
          {...register("site", { required: "*Details Required" })}
        ></input> */}

        <Select
          defaultValue={Data[0]?.label}
          style={{
            width: "80%",
          }}
          onChange={handleChange}
          options={Data}
        />

        <button
          className={`${Styles.Button}`}
          onClick={handleSubmit((data) => {
            setValue(data);

            setIsModalOpen(true);
          })}
        >
          Submit
        </button>
      </div>
      <Carousel
        className={`${Styles.Carousel}`}
        autoPlay="true"
        emulateTouch="true"
        infiniteLoop="true"
      >
        <div>
          <img src={Main1} alt="site" />
        </div>
        <div>
          <img src={Img01} alt="site" />
        </div>
        <div>
          <img src={Img02} alt="site" />
        </div>
        <div>
          <img src={Img03} alt="site" />
        </div>
        <div>
          <img src={Img04} alt="site" />
        </div>
      </Carousel>

      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        closable={false}
      >
        <div className={`${Styles.modalcontent}`}>
          <h1>Confirm the Details</h1>
          <p>Name: {value?.name}</p>
          <p>Contact: {value?.contact}</p>
          <p>Email ID: {value?.email}</p>
          <p>Date: {value?.date}</p> 
          <p>Tickets: {value?.ticket}</p>
          {/* {console.log("filter==>>",Data.filter((item)=> selectedMonumentId === item.value  ))} */}
          <p>Site: { Data.filter((item)=> selectedMonumentId === item.value  )[0]?.label }</p>
        </div>
        <div className={`${Styles.modalbutton}`}>
          <button
            style={{ backgroundColor: "green" }}
            onClick={() => {
              saveData();
              // window.location.href="/"
            }}
          >
            Confirm
          </button>
          <button
            style={{ backgroundColor: "red" }}
            onClick={() => setIsModalOpen(false)}
          >
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Ticket_Booking;
