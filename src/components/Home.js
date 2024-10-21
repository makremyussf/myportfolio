// src/components/Home.js
import React from 'react';
import './Home.css'; // For styling the component
import me from '../media/me.jpeg';
import Project from './Project';

const Home = () => {
    const projects = [
        {
          id: 1,
          title: 'Project One',
          description: 'A brief description of Project One.',
          image: require('../media/me.jpeg'), // Adjust path and use require for local images
          link: 'https://yourprojectlink1.com',
        },
        {
          id: 2,
          title: 'Project Two',
          description: 'A brief description of Project Two.',
          image: require('../media/me.jpeg'),
          link: 'https://yourprojectlink2.com',
        },
        {
            id: 3,
            title: 'Project Two',
            description: 'A brief description of Project Two.',
            image: require('../media/me.jpeg'),
            link: 'https://yourprojectlink2.com',
          },
          {
            id: 4,
            title: 'Project Two',
            description: 'A brief description of Project Two.',
            image: require('../media/me.jpeg'),
            link: 'https://yourprojectlink2.com',
          },
          {
            id: 5,
            title: 'Project Two',
            description: 'A brief description of Project Two.',
            image: require('../media/me.jpeg'),
            link: 'https://yourprojectlink2.com',
          },
        // Add more projects as needed
      ];
  return (
    <section className="home" id="home">
      <div className="home-content">
      <div className="home-image">
        <img src={me} alt="Profile" />
      </div>
        <h1>Welcome to My Portfolio</h1>
        <h2>I'm Makrem Youssef</h2>
        <p>
          I'm a passionate UI/UX and Graphic Designer and Developer based in Tunis.
          I specialize in creating beautiful, functional websites and apps and designs.
        </p>
        <a href="#projects" className="btn">View My Work</a>




        <div className="projects-section" id="projects">
        <h2>My Work</h2>
        <div className="projects">
          {projects.map((project) => (
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
    </section>
  );
};

export default Home;
