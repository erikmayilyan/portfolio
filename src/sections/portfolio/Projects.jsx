import React from 'react';
import Project from './Project';
import './portfolio.css';

const Projects = ({ projects, query }) => {
  const normalizedQuery = query.toLowerCase();

  return (
    <div className='portfolio__projects'>
      {projects
        .filter((project) => {
          const title = project.title ? project.title.toLowerCase() : '';
          const category = project.category ? project.category.toLowerCase() : '';

          return title.includes(normalizedQuery) || category.includes(normalizedQuery);
        })
        .map((project) => (
          <Project key={project.id} project={project} />
        ))}
    </div>
  );
};

export default Projects;
