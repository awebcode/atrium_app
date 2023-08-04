import Link from 'next/link';
import React from 'react'
import ProjectSection from './Project';

const Projects = () => {
  return (
    <>
      <div className="projects">
        <div className="projects-header">
          <h2>RECENT WORKS.</h2>
          <h1>WE HAVE BEEN QUITE BUSY RECENTLY</h1>
        </div>
        {/* <nav className="projects-nav">
          <ul>
            <li>Web Design</li>
            <li>Web Desvelopment</li>
            <li>Apps</li>
            <li>Branding</li>
          </ul>
        </nav> */}
        <ProjectSection />
      </div>
    </>
  );
}

export default Projects