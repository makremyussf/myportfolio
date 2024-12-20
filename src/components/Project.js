// src/components/Project.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css';

const Project = ({ id, title, description, image }) => {
  return (
    <div className="project-card">
     <div className='image-wrapper'>
      <img src={image} alt={title} className="project-image" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={`/projects/${id}`} className="btn">
        View Project
      </Link>
    </div>
  );
};

export default Project;
