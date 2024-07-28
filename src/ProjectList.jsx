import { v4 as uuid4 } from 'uuid';

const ProjectList = [
  {
    id: uuid4(),
    name: 'Check It',
    subtitle: 'To-do list tracker',
    img: 'src/assets/CheckIt.png',
    alt: 'Check It screenshot',
    description: 'A intuitive web app to create, manage, and prioritize all of your tasks',
    tools: ['Html', 'CSS', 'Javascript'],
    live: 'https://msambere.github.io/To-Do-List-App/',
    github: 'https://github.com/Msambere/To-Do-List-App'
  },
  {
    id: uuid4(),
    name: 'Education dashboard',
    subtitle: 'administration dashboard',
    img: 'src/assets/AdminDashboard.png',
    alt: 'Admin Dashboard screenshot',
    description: 'A template for a administration dashboard',
    tools: ['Html', 'CSS', 'Javascript'],
    live: 'https://msambere.github.io/Admin-Dashboard-Project/',
    github: 'https://github.com/Msambere/Admin-Dashboard-Project'
  },
  {
    id: uuid4(),
    name: 'Digital BookShelf',
    subtitle: '',
    img: 'src/assets/DigitalBookshelf.png',
    alt: 'website screenshot',
    description:
      'A digital bookshelf where users can store information about their favorite books.',
    tools: ['Html', 'CSS', 'Javascript'],
    live: 'https://msambere-digital-bookshelf.netlify.app/',
    github: 'https://github.com/Msambere/Project-Digital--Library'
  },
  {
    id: uuid4(),
    name: 'Tic-Tac-Toe',
    subtitle: '',
    img: 'src/assets/TicTacToe.png',
    alt: 'website screenshot',
    description: 'A two-player game of tic-tac-toe',
    tools: ['Html', 'CSS', 'Javascript'],
    live: 'https://msambere.github.io/Project-TicTactToe/',
    github: 'https://github.com/Msambere/Project-TicTactToe'
  },
  {
    id: uuid4(),
    name: 'Etch-a-Sketch',
    subtitle: '',
    img: '',
    alt: 'website screenshot',
    description: 'Use your mouse to create images',
    tools: ['Html', 'CSS', 'Javascript'],
    live: 'https://msambere.github.io/Etch-a-Sketch/',
    github: 'https://github.com/Msambere/Etch-a-Sketch'
  }
];

export { ProjectList };
