import { useEffect } from 'react';
import AboutImage from '../../assets/about.png';
import CV from '../../assets/erik.pdf';
import {HiDownload} from 'react-icons/hi';
import data from './data.js';
import AOS from 'aos';
import Card from '../../components/Card';
import './about.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000
    })
  }, []);

  return (
    <section id="about">
      <div className='container about__container'>
        <div className='about__left'>
          <div className='about__portrait' data-aos="fade-in">
            <img src={AboutImage} alt="About Image" />
          </div>
        </div>
        <div className='about__right'>
          <h2>About Me</h2>
          <div className='about__cards' data-aos="fade-in">
            {
              data.map(item => (
                <Card key={item.id} className="about__card">
                  <span className='about__card-icon'>
                    {item.icon}
                  </span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>
              ))
            }
          </div>
          <p data-aos="fade-in">
          I have been involved in the web development industry since graduating from college, and I am always motivated to create more websites and learn something new!
          </p>
          <p data-aos="fade-in">
          My name is Erik Mayilyan from Vancouver, Canada. I am a full-stack web developer with Associates in Applied Web Development and Software Systems Development. My top priority is to satisfy the needs of all my customers by building quality products. Get in touch today to ask me any questions or for any offers that you have! Check out my resume below!
          </p>
          <a href={CV} download className='about__cv btn primary'>
            Download CV <HiDownload />
          </a>
        </div>
      </div>
    </section>
  )
};

export default About;