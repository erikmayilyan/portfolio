import React from 'react';
import Projects from './Projects';
import data from './data';
import { useState } from 'react';
import './portfolio.css';

function Portfolio() {
  const [projects, setProjects] = useState(data);
  const [query, setQuery] = useState("");

  return (
    <section id="portfolio">
      <h2>Some Of My Projects</h2>
      <p>
      You are welcome to check out some of the projects that I have created.
      </p>
      <div className='container portfolio__container'>
        <input 
          type="text" 
          placeholder="Search The Project..."
          className='search'
          onChange={(event) => setQuery(event.target.value)}
        />
        <Projects projects={projects} query={query} />
      </div>
    </section>
  )
}

export default Portfolio
