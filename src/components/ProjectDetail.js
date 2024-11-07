// src/components/ProjectDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetail.css';
import ProjectData from './projectData'; // Import the data

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = ProjectData.find((proj) => proj.id === parseInt(projectId));

  if (!project) {
    return <p>Project not found!</p>;
  }

  return (
    <div className="project-detail">
      <img src={project.image} alt={project.title} className="project-detail-image" />
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <p>{project.details}</p>
      {/* <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn">
        Visit Project
      </a> */}
    </div>
  );
};

export default ProjectDetail;
