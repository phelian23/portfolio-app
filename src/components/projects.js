import Budget from '../images/Budget.jpg';
import camo from '../images/camo.jpg';
import rentScoot from '../images/rentScoot.jpg';
import Forward from '../images/Forward.png';

const projects = [
  {
    id: 1,
    title: 'Rent A Scooter',
    description: 'This is a web application that shows to the user a collection of scooters fetched from an API, the details include scooter name, photo, price and discription. The user can sign up and add new scooters to the collection and have their own favorites collection.',
    tech: ['JavasScript', 'React', 'Ruby On Rails', 'PostgresSQL'],
    liveLink: 'https://rent-item-ph.herokuapp.com/',
    sourceLink: 'https://github.com/phelian23/rent-item-frontend',
    image: rentScoot,
  },
  {
    id: 2,
    title: 'Forward',
    description: 'This is a web application shows to the user a collection of articles fetched from an API, the articles can be filtered based on most recent, most viewed, and query search.',
    tech: ['JavasScript', 'React', 'Ruby On Rails', 'PostgresSQL'],
    liveLink: 'https://62e127b5ad63ff0b85e27648--timely-cascaron-02b67e.netlify.app/',
    sourceLink: 'https://github.com/phelian23/forward-frontend',
    image: Forward,
  },
  {
    id: 3,
    title: 'Budget Watch',
    description: 'This is a mobile web application users can manage their budget: have a list of transactions associated with a category, so that the user can see how much money is spent and on what.',
    tech: ['Ruby', 'Rails', 'Css', 'HTML'],
    liveLink: 'https://calm-depths-32104.herokuapp.com/',
    sourceLink: 'https://github.com/phelian23/Budget-Watch',
    image: Budget,
  },
  {
    id: 4,
    title: 'Math Magician',
    description: "Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations. and read a random math-related quote.",
    tech: ['ReactJs', 'JavaScript', 'Css'],
    liveLink: 'https://phelian23.github.io/math-magician/',
    sourceLink: 'https://github.com/phelian23/math-magician',
    image: 'https://github.com/phelian23/My-portfolio/blob/main/Images/MathMagic.PNG?raw=true',
  },
  {
    id: 5,
    title: 'Leaderboard',
    description: "This leaderboard website allows scores submitted by different players to be displayed. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API service.",
    tech: ['html', 'Javascript', 'Css'],
    liveLink: 'https://phelian23.github.io/leaderboard/',
    sourceLink: 'https://github.com/phelian23/leaderboard',
    image: 'https://github.com/phelian23/My-portfolio/blob/main/Images/Capture1.PNG?raw=true',
  },
  {
    id: 6,
    title: 'Afrobeat Festival',
    description: "This project is a supposed website for the Afro Beats Festival(Imaginary). It consists of two pages and is responsive to mobile and desktop screens.",
    tech: ['html', 'Bootstrap', 'JavaScript'],
    liveLink: 'https://phelian23.github.io/capstone-1/',
    sourceLink: 'https://github.com/phelian23/capstone-1',
    image: 'https://github.com/phelian23/My-portfolio/blob/main/Images/2021-10-15.png?raw=true',
  },
  {
    id: 7,
    title: 'Camo',
    description: 'Camo Limited is at the forefront of developing and leveraging emerging technologies within the remits of space, communications and quantum technologies. We are committed to the safe and responsible deployment of these technology areas in achieving the sustainable development goals (SDGs).',
    tech: ['HTML', 'React', 'JavaScript', 'CSS'],
    liveLink: 'http://camo1.herokuapp.com/',
    sourceLink: 'https://github.com/phelian23/camo',
    image: camo,
  },
  {
    id: 8,
    title: 'Movies',
    description: "In this project, we build a movie display site, using the TVmazAPI to get current streaming movies, which allows users to add comments and likes. And using the Microverse involvement API to save data such as likes and comments.",
    tech: ['JavaScript', 'webpack', 'CSS'],
    liveLink: 'https://timowest12.github.io/JS-capstone/dist',
    sourceLink: 'https://github.com/phelian23/JS-capstone',
    image: 'https://github.com/phelian23/My-portfolio/blob/main/Images/moviejs.PNG?raw=true',
  },
];

export default projects;