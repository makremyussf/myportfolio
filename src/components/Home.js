// src/components/Home.js
import React from 'react';
import './Home.css'; // For styling the component
import me from '../media/me.jpeg';
import Project from './Project';
import ProjectData from './projectData'; // Import the data

const Home = () => {

  return (
    <section className="home" id="home">
      <div className="home-content">
      <div className="home-image">
        <img src={me} alt="Profile" />
      </div>
        <h1>Welcome to My Portfolio</h1>
        <div className='makremyoussef'>I'm Makrem Youssef</div>
        <div className='aboutme'>
       <div className='aboutme'> <p>I'm a passionate UI/UX and Graphic Designer and Developer based in Tunis.
          I specialize in creating beautiful, functional websites and apps and designs.
          </p>
          </div>
        </div>
        <div className="viewmywork"><span>View My Work</span></div>
        <div className="divider"></div>



        <div className="projects-section" id="projects">
        <h2>My Work</h2>
        <div className="projects">
        <div className="projects">
    {ProjectData.map((project) => (
        <Project
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
        />
    ))}
</div>
        </div>
        </div>
        </div>
    </section>
  );
};

export default Home;
