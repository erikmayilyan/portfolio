import React from 'react';
import data from './data';
import './contact.css';

function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>
        Get in touch with me by clicking on any links below. 
      </p>
      <div className='container contact__container'>
        {
          data.map(data => 
            <a 
              key={data.id} 
              href={data.link} 
              target="_blank"
              rel="noopener noreferrer"
            >{data.icon}</a>
          )
        }
      </div>
    </section>
  )
}

export default Contact
