import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const images = [
  {
    id: 1,
    src: "/projects/1.jpg",
    alt: "web design",
    category: "web",
  },
  {
    id: 2,
    src: "/a.jpg",
    alt: "web development",
    category: "development",
  },
  {
    id: 3,
    src: "/projects/3.jpg",
    alt: "apps development",
    category: "apps",
  },
  {
    id: 4,
    src: "/projects/4.jpg",
    alt: "branding",
    category: "branding",
  },
  {
    id: 5,
    src: "/projects/5.jpg",
    alt: "web design",
    category: "web",
  },
  {
    id: 6,
    src: "/team1.jpg",
    alt: "web development",
    category: "development",
  },
  {
    id: 7,
    src: "/team2.jpg",
    alt: "apps development",
    category: "apps",
  },
  {
    id: 8,
    src: "/projects/5.jpg",
    alt: "branding",
    category: "branding",
  },
  {
    id: 4,
    src: "/projects/4.jpg",
    alt: "branding",
    category: "branding",
  },
  {
    id: 5,
    src: "/projects/5.jpg",
    alt: "web design",
    category: "web",
  },
  {
    id: 6,
    src: "/projects/5.jpg",
    alt: "web development",
    category: "development",
  },
];

const ProjectSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [visibleImages, setVisibleImages] = useState(4); // Number of images to display initially
  const imagesPerLoad = 4; // Number of images to load on each "Load More" click

  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((image) => image.category === selectedCategory);

  const handleFilter = (category) => {
    setSelectedCategory(category);
    setVisibleImages(4); // Reset the visible images count when changing categories
  };

  const handleLoadMore = () => {
    setVisibleImages((prevVisible) => prevVisible + imagesPerLoad);
  };

  const handleShowLess = () => {
    setVisibleImages(4); // Reset the visible images count when clicking "Show Less"
  };

  return (
    <>
      <div className="projectSection">
        <div className="project-nav">
          <div className="filterButtons">
            <button onClick={() => handleFilter("all")}>All</button>
            <button onClick={() => handleFilter("web")}>WEB DESIGN</button>
            <button onClick={() => handleFilter("development")}>DEVELOPMENT</button>
            <button onClick={() => handleFilter("apps")}>APPS</button>
            <button onClick={() => handleFilter("branding")}>BRANDING</button>
            <Link href="/Project" className="link">
              see all projects
            </Link>
          </div>
        </div>

        <motion.div className="imageGallery" layout>
          {filteredImages.slice(0, visibleImages).map((image) => (
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
              <div className="imageLink">
                <Link href="/image-link">
                  <p className="linkText" href="#">
                    {image.alt}
                  </p>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More and Show Less Buttons */}
        {filteredImages.length > visibleImages ? (
          <div className="load-more">
            {visibleImages <= imagesPerLoad ? (
              <button type="button" onClick={handleLoadMore}>
                Load More
              </button>
            ) : (
              <button type="button" onClick={handleShowLess}>
                Show Less
              </button>
            )}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default ProjectSection;