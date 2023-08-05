import { useState,useEffect } from "react";
import Image from "next/image";

import { motion,AnimatePresence } from "framer-motion";
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
    src: "/projects/2.jpg",
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
  const [selectedCategory, setSelectedCategory] = useState("web");
  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((image) => image.category === selectedCategory);

  const handleFilter = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div className="projectSection">
        <div className="project-nav">
          <div className="filterButtons">
            <button onClick={() => handleFilter("web")}>WEB DESIGN</button>
            <button onClick={() => handleFilter("development")}>DEVELOPMENT</button>
            <button onClick={() => handleFilter("apps")}>APPS</button>
            <button onClick={() => handleFilter("branding")}>BRANDING</button>
          </div>
          <div>
            <Link
              href="/projects"
              style={{
                cursor: "pointer",
                color: "var(--primary-color)",
                fontSize: "14px",
              }}
            >
              see all projects
            </Link>
          </div>
        </div>

        <motion.div className="imageGallery" layout>
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              className={`${"imageItem"} ${"category"}`}
              layoutId={`image-${image.id}`}
              layout
              whileHover={{ scale: 1.1 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={300}
                height={200}
                layout="responsive"
              />
              <AnimatePresence>
                {image.category === selectedCategory && (
                  <motion.div
                    className="imageLink"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link href="/image-link">
                      <p className="linkText" href="#">{image.alt}</p>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
        <div className="load-more">
          <button type="#">Load More</button>
        </div>
      </div>
    </>
  );
};

export default ProjectSection;