import React from 'react';
import {links, socials} from './data';
import './footer.css';

function Footer() {
  return (
    <footer>
      <div className='container footer__container'>
        <ul className='nav__menu'>
          {
            links.map(flink => 
              <li key={flink.id}>
                <a href={flink.link}>
                  {flink.title}
                </a>
              </li>
            )
          }
        </ul>
        <div className='footer__socials'>
          {
            socials.map(social => 
              <a 
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            )
          }
        </div>
        <div className='footer__copyright'>
          <small>2023 ERIK MAYILYAN &copy; All Rights Reserved</small>
        </div>
      </div>
    </footer>
  )
}

export default Footer
