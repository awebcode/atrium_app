// import { useState } from "react";

// const sliderData = [
//   {
//     id: 1,
//     leftText: "Slide 1 Text",
//     rightImage: "/images/image1.jpg",
//   },
//   {
//     id: 2,
//     leftText: "Slide 2 Text",
//     rightImage: "/images/image2.jpg",
//   },
//   {
//     id: 3,
//     leftText: "Slide 3 Text",
//     rightImage: "/images/image3.jpg",
//   },
// ];

// const Slider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const handleNextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % sliderData.length);
//   };

//   const handlePrevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + sliderData.length) % sliderData.length);
//   };

//   return (
//     <div className="slider-container">
//       <div className="left-side">
//         <h2>{sliderData[currentSlide].leftText}</h2>
//         <button>Button</button>
//       </div>
//       <div className="right-side">
//         <img
//           src={sliderData[currentSlide].rightImage}
//           alt={`Slide ${currentSlide + 1}`}
//         />
//       </div>
//       <div className="slider-buttons">
//         <button onClick={handlePrevSlide}>&lt;</button>
//         <span>{currentSlide + 1}</span>
//         <button onClick={handleNextSlide}>&gt;</button>
//       </div>
//     </div>
//   );
// };

// export default Slider;
// import { useState } from "react";
// import { motion } from "framer-motion";

// const sliderData = [
//   {
//     id: 1,
//     leftText: "Slide 1 Text",
//     rightImage: "/thirteen.svg",
//   },
//   {
//     id: 2,
//     leftText: "Slide 2 Text",
//     rightImage: "/vercel.svg",
//   },
//   {
//     id: 3,
//     leftText: "Slide 3 Text",
//     rightImage: "/next.svg",
//   },
// ];

// const Slider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const handleNextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % sliderData.length);
//   };

//   const handlePrevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + sliderData.length) % sliderData.length);
//   };

//   return (
//     <div className="slider-container">
//       <motion.div
//         initial={{ y: 20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className="left-side"
//       >
//         <h2>{sliderData[currentSlide].leftText}</h2>
//         <button>Button</button>
//       </motion.div>
//       <motion.div
//         initial={{ x: "-100%" }}
//         animate={{ x: 0 }}
//         exit={{ x: "100%" }}
//         transition={{ duration: 0.5 }}
//         className="right-side"
//       >
//         <img
//           src={sliderData[currentSlide].rightImage}
//           alt={`Slide ${currentSlide + 1}`}
//         />
//       </motion.div>
//       <div className="slider-buttons">
//         <button onClick={handlePrevSlide}>Prev</button>
//         <span>{currentSlide + 1}</span>
//         <button onClick={handleNextSlide}>Next</button>
//       </div>
//     </div>
//   );
// };

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sliderData = [
  {
    id: 1,
    btnText: "Read More1",
    leftText: "Slide 1 Text",
    rightImage: "/thirteen.svg",
  },
  {
    id: 2,
    btnText: "Read More2",
    leftText: "Slide 2 Text",
    rightImage: "/vercel.svg",
  },
  {
    id: 3,
    btnText: "Read More3",
    leftText: "Slide 3 Text",
    rightImage: "/next.svg",
  },
];

const LeftSide = ({ currentSlide }) => (
    <motion.div
        key={currentSlide}
    className="left-side"
    initial={{ opacity: 0,y:80 }}
    animate={{ opacity: 1,y:0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h2>{sliderData[currentSlide].leftText}</h2>
    <button>{sliderData[currentSlide].btnText}</button>
  </motion.div>
);

const RightSide = ({ currentSlide }) => (
  <div className="right-side">
    <motion.img
      key={currentSlide}
      src={sliderData[currentSlide].rightImage}
      alt={`Slide ${currentSlide + 1}`}
      initial={{ opacity: 0,y:0 }}
      animate={{ opacity: 1,y:40 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    />
  </div>
);

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
    <div className="slider-container">
      <LeftSide currentSlide={currentSlide} />
      <RightSide currentSlide={currentSlide} />
      <div className="slider-buttons">
        <button onClick={handlePrevSlide}>Prev</button>
        <span>{currentSlide + 1}</span>
        <button onClick={handleNextSlide}>Next</button>
      </div>
    </div>
  );
};

export default Slider;
