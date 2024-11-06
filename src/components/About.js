// src/components/About.js
import React from 'react';
import './About.css'; // Make sure to create the CSS file for styling

const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <h1>About Me</h1>
        <p>
          Hello! I'm Makrem Youssef, a passionate UI/UX and Graphic Designer and Developer based in Tunis. I have a deep love for creating visually appealing and user-friendly digital experiences.
        </p>
        <p>
          With a background in graphic design and development, I specialize in bringing ideas to life through clean, functional, and beautiful interfaces. Whether it's a website, mobile app, or branding, I focus on creating designs that are not only visually stunning but also easy to use.
        </p>
        <p>
          In my spare time, I love exploring new design trends, learning new development techniques, and working on personal projects to continuously improve my skills. Let's create something amazing together!
        </p>
      </div>
      <div className="skills">
        <h2>Skills</h2>
        <ul>
          <li>UI/UX Design</li>
          <li>Graphic Design</li>
          <li>React.js & JavaScript</li>
          <li>HTML & CSS</li>
          <li>Responsive Design</li>
          <li>Adobe Creative Suite</li>
          <li>WordPress Development</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
