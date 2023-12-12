import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

export const links = [
  { id: 1, link: '#', title: 'Home' },
  { id: 2, link: '#about', title: 'About' },
  { id: 4, link: '#portfolio', title: 'Portfolio' },
  { id: 5, link: '#contact', title: 'Contact' },
];

export const socials = [
  {
    id: 1, 
    link: 'https://www.linkedin.com/in/erik-mayilyan-abab95190/', 
    icon: <AiFillLinkedin />
  },
  {
    id: 2,
    link: 'https://github.com/erikmayilyan',
    icon: <AiFillGithub />
  }
];
