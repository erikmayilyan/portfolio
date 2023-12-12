import { useEffect } from 'react';
import HeaderImage from '../../assets/header.png';
import data from './data';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './header.scss';

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000
    })
  }, []);

  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile" data-aos="flip-up">
          <img src={HeaderImage} alt="Header Portrait" />
        </div>
        <h3 data-aos="flip-up">Erik Mayilyan</h3>
        <p data-aos="flip-up">
        Welcome to Erik Mayilyan's official portfolio page! 
        Here you can find more information about Erik Mayilyan's completed projects!
        This portfolio was created using ReactJS. 
        </p>
        <div className='header__cta'>
          <a href='#contact' className='btn primary header__cta_1'>Contact Erik</a>
          <a href='#portfolio' className='btn light header__cta_2'>My Projects</a>
        </div>
        <div className='header__socials'>
          {
            data.map(item => 
              <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">
                {item.icon}
              </a>
            )
          }
        </div>
      </div>
    </header>
  )
};

export default Header;