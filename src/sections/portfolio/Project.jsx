import React from 'react';
import Card from '../../components/Card';
import './portfolio.css';

const Project = ({ project }) => {
  return (
    <Card className="portfolio__project">
      <div className='portfolio__project-image'>
        <img src={project.image} alt="Portfolio Project Image" />
      </div>
      <h4>{project.title}</h4>
      <p>{project.desc}</p>
      <div className='portfolio__project-cta'>
        <a 
          href={project.github} 
          className='btn sm' 
          target="_blank"
          rel="noopner noreferrer"
        >Github</a>
      </div>
    </Card>
  )
}

export default Project;