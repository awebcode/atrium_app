import React, { useEffect, useRef } from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import EastIcon from "@mui/icons-material/East";
SwiperCore.use([Navigation, Pagination]);

const images = [
  "/projects/5.jpg",
  "/projects/3.jpg",
  "/projects/2.jpg",
  "/projects/4.jpg",
  "/team-1.jpg",
  "/team2.jpg",
  // Add more image URLs as needed
];

const ClientSays = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    // Update slidesPerView based on window width
    const slidesPerView = window.innerWidth < 768 ? 1 : 4;

    swiperRef.current = new SwiperCore(".swiper-container", {
      loop: true,
      slidesPerView,
      spaceBetween: 20,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);

  return (
    <div className="client-says">
      <div className="client-says-header">
        <span>Our Clients</span>
        <div>
          <h1>
            WE CHERISH AND RESPECT OUR CLIENTS & PARTNERS <br /> EVERY PROJECT IS A LABOR
            OF LOVE!
          </h1>
        </div>
        <div>
          <div className="client-says-btn">
            <KeyboardBackspaceIcon onClick={() => swiperRef.current.slidePrev()} />
            <EastIcon onClick={() => swiperRef.current.slideNext()} />
          </div>
        </div>
      </div>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </SwiperSlide>
          ))}
        </div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </div>
  );
};

export default ClientSays;
