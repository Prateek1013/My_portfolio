import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  scb,
  starbucks,
  tesla,
  carrent,
  jobit,
  tripguide,
  shopify,
  algoDs,
  quizapp,
  sudoku,
  employee_manager,
  drawTogether
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];


const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software developer intern",
    company_name: "Standard Chartered GBS",
    icon: scb,
    iconBg: "#383E56",
    date: "May 2023 - July 2023",
    points: [
     `Employed class-based and lifecycle components within React.js to proficiently create the reports and enquiry segment
     of the SCPay dashboard interface, ensuring robust functionality and an enhanced user experience`,
     `Designed a partial search feature using vanilla JavaScript, establishing connection to a PostgreSQL database which
     retrieves positively matched files, presenting results in both tabular and list views for enhanced usability.`,
     `Developed an attachment UI screen from scratch using reactjs and async functional components allowing the user to
     view,edit or download in various formats within the same page space for ivault.`,
     `Handled numerous api endpoints to fetch data from the UI/UX database for the field names and variables that is dis-
     played in various screens/modals inlcuding dashboard, reports, enquiry and maintenance queue.`
    ],
  },
  {
    title: "Fullstack web Developer",
    company_name: "NearBond",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "October 2023 - November 2023",
    points: [
      `Part of Full stack development team responsible for building an e-commerce website from scratch using MERN stack.`,
      `Created admin,customer and seller Dashboard pages using React.js and MUI based custom components.`,
      `Leveraged useContext in React to mainatin the global state of the cart and authentication token within user module.`,
      `Handled api routes in the backend Node.js server for authentication using JWT tokens and interacted with Mongodb database using Primsa ORM for the product inventory`
    ],
  },
];


const projects = [
  {
    name: "drawTogether",
    description:
    `A whiteboard to draw with multiple users drawing at the same time interactively. Multiple color and stroke choices along with undo, redo functions. User can also 
    downlaod the drawn canvas in form of .jpeg.
    `,
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "socket.io",
        color: "green-text-gradient",
      },
      {
        name: "canvas-api",
        color: "pink-text-gradient",
      },
    ],
    image: drawTogether,
    source_code_link: "https://github.com/Prateek1013/drawTogether",

  },

  {
    name: "Algo-DS search engine",
    description:
    `A nodeJS search engine which allows user to give input regarding any question on cp and
     this app will search through thousands of questions on online platform like leetcode,
    CSES,etc and give top matching results
    `,
    tags: [
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "webscraping",
        color: "pink-text-gradient",
      },
    ],
    image: algoDs,
    source_code_link: "https://github.com/Prateek1013/Algo-DS-Search-engine",
  },
  {
    name: "QuizApp",
    description:
    `A MERN based application where user can attempt quizzes on various topics and get the score along with time taken.`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: quizapp,
    source_code_link: "https://github.com/Prateek1013/QuizApp",
  },
  {
    name: "Sudoku Solver",
    description:
    `A reactJS based application that solves the Sudoku grid instantly using Tail recursion in javascript`,
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "tail recursion",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: sudoku,
    source_code_link: "https://github.com/Prateek1013/Sudoku_solver",
  },
  {
    name: "Employee_manager",
    description:
    `A MERN based application that displayes paginated list of employees with different categories and availability. User 
    can search and filter based on various fields. Also, employees can be grouped according to their work domain and 
    availability. Teams can be saved, fetched and deleted from the db.
    `,
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "redux-toolkit",
        color: "pink-text-gradient",
      },
      {
        name:'scss',
        color:'blue-text-gradient'
      }
    ],
    image: employee_manager,
    source_code_link: "https://github.com/Prateek1013/Heli_frontend",
  },
  {
    name: "Employee_manager_backend",
    description:
    `An express server hosted on render handling various api requests like connection to mongodb, search and filtering logic along 
    with CRUD operations on teams pertaining to the  Employee_manager frontend.
    `,
    tags: [
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name:'mongoose',
        color:'pink-text-gradient'
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name:'restapi',
        color:'blue-text-gradient'
      }
    ],
    image: employee_manager,
    source_code_link: "https://github.com/Prateek1013/Heli_backend",
  },

];

export { technologies, experiences, projects };
