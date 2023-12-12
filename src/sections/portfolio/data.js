import Image1 from '../../assets/project1.png';
import Image2 from '../../assets/project2.png';
import Image3 from '../../assets/project3.png';
import Image4 from '../../assets/project4.png';

const data = [
  {
    id: 1,
    category: 'frontend',
    image: Image1,
    title: 'Tweeter Project',
    desc: 'Created a twiiter (X) clone using HTML, CSS, JavaScript, and jQuery. Here a user can post a tweet online.',
    github: 'https://github.com/erikmayilyan/tweeter'
  },
  {
    id: 2,
    category: 'frontend',
    image: Image2,
    title: 'Movie Application',
    desc: 'Created a webite similar to IMDb using ReactJS, where all popular, top rated, and upcoming movies are displayed.',
    github: 'https://github.com/erikmayilyan/movie-application'
  },
  {
    id: 3,
    category: 'fullstack',
    image: Image3,
    title: 'Glendale Limo',
    desc: 'Created a PHP based website where a user can book a limousine service.',
    github: 'https://github.com/erikmayilyan/glendale-limo'
  },
  {
    id: 4,
    category: 'fullstack',
    image: Image4,
    title: 'Tiny App',
    desc: 'Created a simple tiny app using Node and Express that allows users to shorten long URLs.',
    github: 'https://github.com/erikmayilyan/tinyapp'
  }
];

export default data;