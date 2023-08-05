import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const images = [
  {
    id: 1,
    src: "/projects/5.jpg",
    alt: "Web Design",
    category: "web",
  },
  {
    id: 6,
    src: "/projects/4.jpg",
    alt: "Web Design",
    category: "web",
  },
  {
    id: 2,
    src: "/projects/1.jpg",
    alt: "Web Development",
    category: "development",
  },
  {
    id: 8,
    src: "/team1.jpg",
    alt: "Web Development",
    category: "development",
  },
  {
    id: 3,
    src: "/projects/4.jpg",
    alt: "Apps Development",
    category: "apps",
  },
  {
    id: 9,
    src: "/projects/5.jpg",
    alt: "Apps Development",
    category: "apps",
  },
  {
    id: 4,
    src: "/projects/3.jpg",
    alt: "Branding",
    category: "branding",
  },
  {
    id: 10,
    src: "/team2.jpg",
    alt: "Branding",
    category: "branding",
  },
  {
    id: 1,
    src: "/a.jpg",
    alt: "Web Design",
    category: "web",
  },
  {
    id: 6,
    src: "/projects/3.jpg",
    alt: "Web Design",
    category: "web",
  },
  {
    id: 22,
    src: "/projects/5.jpg",
    alt: "Web Development",
    category: "development",
  },
  {
    id: 35,
    src: "/team2.jpg",
    alt: "Web Development",
    category: "development",
  },
  
  // Add more images with appropriate categories
];


const ProjectSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [visibleImages, setVisibleImages] = useState(8); // Number of images to display initially
  const imagesPerLoad = 4; // Number of images to load on each "Load More" click
  const [showLess, setShowLess] = useState(false); // State to control "Show Less" functionality

  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((image) => image.category === selectedCategory);

  const handleFilter = (category) => {
    setSelectedCategory(category);
    setVisibleImages(4); // Reset the visible images count when changing categories
    setShowLess(false); // Reset the "Show Less" state when changing categories
  };

  const handleLoadMore = () => {
    setVisibleImages((prevVisible) => prevVisible + imagesPerLoad);
    setShowLess(true); // Set "Show Less" state to true when clicking "Load More"
  };

  const handleShowLess = () => {
    setVisibleImages(4); // Reset the visible images count when clicking "Show Less"
    setShowLess(false); // Set "Show Less" state to false when clicking "Show Less"
  };

  return (
    <>
      <div className="projectSection x2">
        <div className="projects x2">
          <div className="projects-header">
            <h2>RECENT WORKS.</h2>
            <h1>WE HAVE BEEN QUITE BUSY RECENTLY</h1>
          </div>
        </div>
        <div className="project-nav x2">
          <div className="filterButtons x2">
            <button onClick={() => handleFilter("all")}>All</button>
            <button onClick={() => handleFilter("web")}>WEB DESIGN</button>
            <button onClick={() => handleFilter("development")}>DEVELOPMENT</button>
            <button onClick={() => handleFilter("apps")}>APPS</button>
            <button onClick={() => handleFilter("branding")}>BRANDING</button>
          </div>
        </div>

        <div className="imageGallery">
          <AnimatePresence>
            {filteredImages.slice(0, visibleImages).map((image) => (
              <motion.div
                key={image.id}
                className={`${"imageItem"} ${"category"}`}
                layoutId={`image-${image.id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={300}
                  height={200}
                  layout="responsive"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More and Show Less Buttons */}
        {filteredImages.length > visibleImages && (
          <div className="load-more">
            {showLess ? (
              <button type="button" onClick={handleShowLess}>
                Show Less
              </button>
            ) : (
              <button type="button" onClick={handleLoadMore}>
                Load More
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default ProjectSection;