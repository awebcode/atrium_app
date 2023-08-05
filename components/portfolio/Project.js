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
    alt: "Development",
    category: "development",
  },
  {
    id: 8,
    src: "/team1.jpg",
    alt: "Development",
    category: "development",
  },
  {
    id: 3,
    src: "/projects/4.jpg",
    alt: "Apps",
    category: "apps",
  },
  {
    id: 9,
    src: "/projects/5.jpg",
    alt: "Apps",
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
  // Add more images with appropriate categories
];


const ProjectSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((image) => image.category === selectedCategory);

  const handleFilter = (category) => {
    setSelectedCategory(category);
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
            {filteredImages.map((image) => (
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

        <div className="load-more">
          <button type="#">Load More</button>
        </div>
      </div>
    </>
  );
};

export default ProjectSection;
