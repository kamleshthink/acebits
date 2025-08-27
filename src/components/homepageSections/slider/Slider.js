import React from "react";
import { useState } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import e1 from "../../../assets/images/events/e1.jpg";
import e3 from "../../../assets/images/events/e3.jpg";
import e5 from "../../../assets/images/events/e5.jpg";
import e6 from "../../../assets/images/events/e6.jpg";
import e9 from "../../../assets/images/events/e9.jpg";
import e10 from "../../../assets/images/events/e10.jpg";
import e11 from "../../../assets/images/events/e11.jpg";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const cardsData = [
  {
    id: 1,
    title: "Brainwave ",
    content:
      "ACE BITS organised BRAINWAVE - A  Conclave a  Group Discussion event as GDs are an important part of the collaborative and cooperative learning process.",
    imgUrl: e1,
  },
  {
    id: 2,
    title: "E-Construct",
    content:
      "ACE BITS proudly presents E-Construct 2022, a monumental event that celebrates the fusion of beauty, history, and design.",
    imgUrl: e10,
  },
  // { id: 3, title: 'CARD 3', content: 'Peter Parker', imgUrl:(e3)},
  {
    id: 4,
    title: "Avlokan",
    content:
      "Avlokan the flagship tech fest hosted by the Association of Civil Engineers (ACE) at BIT Sindri. Packed with excitement and innovatio.",
    imgUrl: e11,
  },
  {
    id: 5,
    title: "Construction management",
    content:
      "A webinar based on career opportunities in real estate construction and finance management , featuring Mr. Abhay Kumar, Director of the prestigious Institute of Real Estate and Finance (I.R.E.F.).  ",
    imgUrl: e5,
  },
  {
    id: 6,
    title: "Platinum Jubliee",
    content:
      "Celebrated the Platinum Jubilee of BIT Sindri with unparalleled zeal, ACE BITS orchestrated an enlightening lecture series. The inaugural session of this lecture series, graced by esteemed Chief Guest Suresh Kumar Sir, Assistant Professor at IIT BHU.",
    imgUrl: e6,
  },
  // { id: 7, title: 'CARD 7', content: 'Peter Quill', imgUrl:(e7)},
  {
    id: 8,
    title: "World Engineering Day",
    content:
      'On the occassion of Platinum Jubilee celebration lecture series,Department Of Civil Enginering BIT SINDRI orgnised a seminar on the topic WORLD ENGINEERING DAY FOR SUSTAINABLE DEVELOPMENT 2024 "Engineering Solutions for a Sustainable World".',
    imgUrl: e3,
  },
  {
    id: 9,
    title: "Badlav ",
    content:
      'To break the taboo of menstruation and help the needy one, here we are with an exhilarating event ,Badlav.It is a sanitary pads distribution with tagline "no more hushh!",and an awareness session on bad touch and good touch.',
    imgUrl: e9,
  },
];

const Card = ({ title, content, imgUrl }) => (
  <div className="S_card">
    <img src={imgUrl} alt={title} style={{ width: "100%" }} />
    <div className="S_card-content">
      <h2 className="S_head">{title}</h2>
      <p>{content}</p>
    </div>
  </div>
);

const CardSlider = () => {
  // const [activeIndex, setActiveIndex] = useState(0);
  
  // const settings = {
  //   dots: true,
  //   // infinite: true,
  //   // speed: 500,
  //   // slidesToShow: 3,
  //   // slidesToScroll: 1
  //   className: "center",
  //   centerMode: true,
  //   infinite: true,
  //   centerPadding: "60px",
  //   slidesToShow: 3,
  //   speed: 500
  // };

 
  return (
    <>


    <div>
     
      {/* for heading events */}
      <div
        style={{ textAlign: "center", margin: "2rem" }}
        className="post-bearer"
      >
        <h3 className="post-bearer-heading">Events</h3>
      </div>


      <div className="">
        <div className="">
        {/* <Slider {...settings}> */}
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
      
        // slidesPerView={3}
        // centeredSlides={true}
        // spaceBetween={30}
        // pagination={{
        //   type: 'fraction',
        // }}
        // navigation={true}
        // modules={[Pagination, Navigation]}
        // className="mySwiper"
      >
          {cardsData.map((card, index) => (
             <SwiperSlide>
            <div
              key={card.id}
           
            >
            
             <Card {...card} />
            </div>
            </SwiperSlide> 

          ))}
      </Swiper>

          {/* </Slider> */}
        </div>
       
      </div>
    </div>
    </>
  );
};

export default CardSlider;
