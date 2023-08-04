import React from "react";

const newsData = [
  {
    title: "Lorem Ipsum",
    date: "July 10, 2023",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/projects/5.jpg",
  },
  {
    title: "Etiam Ullamcorper",
    date: "June 22, 2023",
    content: "Etiam ullamcorper tortor eu elit egestas, eu scelerisque ipsum tincidunt.",
    image: "/projects/2.jpg",
  },
  {
    title: "Vestibulum Nisl",
    date: "May 15, 2023",
    content: "Vestibulum nisl enim, viverra et velit ut, consectetur varius est.",
    image: "/projects/3.jpg",
  },
  // Add more news items as needed
];

const NewsSection = () => {
  return (
    <div className="news-section">
      <div className="news-header">
        <h4>CORPORATE BLOG</h4>
        <h2>OUR LATEST NEWS</h2>
      </div>
      <div className="news-container">
        {newsData.map((item, index) => (
          <div className="news-card" key={index}>
            <div className="card-image">
              <img src={item.image} alt={`News ${index + 1}`} />
              <div className="card-overlay">
                <span>+</span>
              </div>
            </div>
            <div className="card-content">
              <h3>{item.title}</h3>
              <p className="news-date">{item.date}</p>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="load-more-btn">
        <button>Load More</button>
      </div>
    </div>
  );
};

export default NewsSection;
