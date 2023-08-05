import React, { useState } from "react";
import styles from "./TestimonialSlider.module.css";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO",
    image: "/b.jpg",
    testimonialText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus tellus sit amet lacus condimentum, a dapibus est euismod.",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Designer",
    image: "/d.jpg",
    testimonialText:
      "Praesent eleifend mauris ut pharetra mollis. Sed in lacinia eros, et finibus nunc. Sed fermentum, odio nec elementum pulvinar, quam nunc hendrerit turpis, eu tristique orci metus vel neque.",
  },
  {
    id: 4,
    name: "Asikur Rahman",
    position: "CEO",
    image: "/me.jpg",
    testimonialText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus tellus sit amet lacus condimentum, a dapibus est euismod.",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Designer",
    image: "/team1.jpg",
    testimonialText:
      "Praesent eleifend mauris ut pharetra mollis. Sed in lacinia eros, et finibus nunc. Sed fermentum, odio nec elementum pulvinar, quam nunc hendrerit turpis, eu tristique orci metus vel neque.",
  },
  // Add more testimonials here
];

const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

    return (
      <>
        {" "}
        <div className="testimonial-header">
          <h1> WHAT OUR CLIENTS SAY</h1>
          
        </div>
        <div className={styles.slider}>
          <div className={styles.testimonial}>
            <Image
              src={testimonials[activeIndex].image}
                        alt={testimonials[activeIndex].name}
                        height={100}
                        width={100}
                       
            />
            <div className={styles.testimonialContent}>
              <h3>{testimonials[activeIndex].name}</h3>
              <p className={styles.position}>{testimonials[activeIndex].position}</p>
              <p className={styles.testimonialText}>
                {testimonials[activeIndex].testimonialText}
              </p>
            </div>
          </div>
          <div className={styles.buttons}>
            <button onClick={handlePrevSlide} className={styles.buttonsingle}>
              &#8249;
            </button>
            <button onClick={handleNextSlide} className={styles.buttonsingle}>
              &#8250;
            </button>
          </div>
        </div>
      </>
    );
};

export default TestimonialSlider;
