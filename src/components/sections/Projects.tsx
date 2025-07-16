import { ProjectCard } from "../";

import type { ProjectDetails } from "../../types/Project";

const projectsList: ProjectDetails[] = [ //* Temporal pseudo - JSON. Firebase/Supabse next update
  {
    id: 1,
    title: 'EDUCAPP',
    description: 'Project presented at ANUIES4MX (internship to Japan). Generated personalized forms using the OpenAI API. Built a mobile app to display and manage and manage assessments. Implemented dynamic form components',
    stack: ['React Native', 'TypeScript', 'OpenAI API'],
    image: 'https://placehold.co/250X250.png',
    repo:'https://github.com/FelixAva/stay'
  },
  {
    id: 2,
    title: 'Music App',
    description: 'Mobile application with authentication and API Consumption (Last.fm). Retrieved musical data (artists and details) from an external API. Validated Login and registration forms. Managed user sessions with local storage',
    stack: ['React Native', 'TypeScript', 'JavaScript'],
    image: 'https://placehold.co/250X250.png',
    repo:'https://github.com/FelixAva/programobile'
  },
  {
    id: 3,
    title: 'This Portfolio',
    description: 'Website to show my résumé, projects and archievements. Build it with React and Vite',
    stack: ['React', 'TypeScript'],
    image: '/assets/logo.webp',
    repo:'https://github.com/FelixAva/portfolio'
  },
]


const Projects = () => {
  return (
    <section id="projects" className='snap-start my-5 bg-white flex justify-center items-center md:min-h-[calc(100vh-96px)] md:m-0'>
      <div className="grid grid-cols-2 gap-x-7 gap-y-7">
        {
          projectsList.map((item: ProjectDetails) => (
            <ProjectCard key={item.title + item.id} {...item} />
          ))
        }
      </div>
    </section>
  );
}

export default Projects;
