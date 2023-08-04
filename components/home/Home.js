


import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { Mouse, MouseOutlined } from "@material-ui/icons";
import { useRouter } from "next/router";
import Image from "next/image";
const sliderData = [
  {
    id: 1,
    headText: "We Are Creative",
    mainText: "CREATIVE BRANDING POWERFUL AGENCY",
    bottomText: "we achive excellence by implemnenting ideas.",
    btnText: "Cheack Portfolio",

    rightImage: "/a.jpg",
  },
  {
    id: 2,
    headText: "We Are Great",
    mainText: "GIVING YOUR BUSINESS AT FIRST START",
    bottomText: "we use innivative approach to your business projects",
    btnText: "Cheack Portfolio",

    rightImage: "/c.jpg",
  },
  {
    id: 3,
    headText: "We Are Powerful",
    mainText: "REBRANDIP GROUPS AND STARTUP IDEAS",
    bottomText: "try working with us and discover the power of design.",
    btnText: "contact us",

    rightImage: "/c.jpg",
  },
];

const LeftSide = ({ currentSlide }) => (
  <motion.div
    key={currentSlide}
    className="left-side"
    initial={{ opacity: 0, y: 80 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h2>{sliderData[currentSlide].headText}</h2>
    <h1>{sliderData[currentSlide].mainText}</h1>
    <p>{sliderData[currentSlide].bottomText}</p>
    <button>{sliderData[currentSlide].btnText}</button>
  </motion.div>
);

const RightSide = ({ currentSlide }) => (
  <div className="right-side">
    <motion.img
      key={currentSlide}
      src={sliderData[currentSlide].rightImage}
      alt={`Slide ${currentSlide + 1}`}
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 40 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    />
  </div>
);

const Home= () => {
  const [currentSlide, setCurrentSlide] = useState(0);
    const Route = useRouter();
  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderData.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderData.length) % sliderData.length);
  };

  useEffect(() => {
    const sliderInterval = setInterval(handleNextSlide, 10000); // Change slide every 10 seconds

    return () => clearInterval(sliderInterval); // Clear interval on component unmount
  }, []);

  return (
    <>
      <div className="container">
        <span className="mouse" onClick={() => Route.push("#about")}>
          <Image
            src="/icon/mouse.png"
            alt="image"
            height={1000}
            width={1000}
            layout="responsive"
          />
        </span>
        <div className="slider-container">
          <LeftSide currentSlide={currentSlide} />
          <RightSide currentSlide={currentSlide} />
          <div className="slider-buttons">
            <button onClick={handlePrevSlide}>01</button>
            <button onClick={handlePrevSlide}>02</button>
            <button onClick={handleNextSlide}>03</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
