import React, { useEffect, useRef } from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import EastIcon from "@mui/icons-material/East";
import Image from "next/image";


SwiperCore.use([Navigation, Pagination]);

const testimonials = [
  {
    avatar: "/avatar/1.jpg",
    name: "John Doe",
    text: "Amazing service! The team delivered beyond expectations. Highly recommended!",
  },
  {
    avatar: "/avatar/3.jpg",
    name: "Alice Smith",
    text: "Very professional and talented team. They made our project a success.",
  },
  {
    avatar: "/avatar/2.jpg",
    name: "Michael Johnson",
    text: "Outstanding work! Great attention to detail and excellent communication.",
  },
  {
    avatar: "/avatar/3.jpg",
    name: "John Doe",
    text: "Amazing service! The team delivered beyond expectations. Highly recommended!",
  },
  {
    avatar: "/avatar/1.jpg",
    name: "Alice Smith",
    text: "Very professional and talented team. They made our project a success.",
  },
  {
    avatar: "/avatar/2.jpg",
    name: "Michael Johnson",
    text: "Outstanding work! Great attention to detail and excellent communication.",
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    // Update slidesPerView based on window width
    const slidesPerView = window.innerWidth < 768 ? 1 : 3;

    swiperRef.current = new SwiperCore(".swiper-container-2", {
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
    <div className="testimonial">
      <div className="testimonial-header">
        <div>
          <h2>Testimonial</h2>
          <h1>WHAT OUR CLIENTS SAY</h1>
        </div>
        <div>
          <div className="client-says-btn">
            <KeyboardBackspaceIcon onClick={() => swiperRef?.current?.slidePrev()} />
            <EastIcon onClick={() => swiperRef?.current?.slideNext()} />
          </div>
        </div>
      </div>
      <div className="swiper-container-2">
        <div className="swiper-wrapper">
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-content">
                <div className="avatar">
                  <Image
                    src={testimonial.avatar}
                    alt={`Avatar ${index + 1}`}
                    height={1000}
                    width={1000}
                    layout="responsive"
                  />
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <p className="client-name">- {testimonial.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </div>
  );
};

export default Testimonials;