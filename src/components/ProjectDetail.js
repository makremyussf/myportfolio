// src/components/ProjectDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetail.css';

const projectData = [
  {
    id: 1,
    title: 'Project One',
    description: 'A detailed description of Project One.',
    image: require('../media/me.jpeg'),
    link: 'https://yourprojectlink1.com',
    details: 'Here you can add more information about this project, including technologies used, challenges faced, and links to GitHub or live demos.',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'A detailed description of Project Two.',
    image: require('../media/me.jpeg'),
    link: 'https://yourprojectlink2.com',
    details: 'Detailed information about Project Two goes here.',
  },
  // Add more projects as needed
];

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectData.find((proj) => proj.id === parseInt(projectId));

  if (!project) {
    return <p>Project not found!</p>;
  }

  return (
    <div className="project-detail">
      <img src={project.image} alt={project.title} className="project-detail-image" />
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <p>{project.details}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn">
        Visit Project
      </a>
    </div>
  );
};

export default ProjectDetail;
