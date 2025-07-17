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
    <section id="projects" className='snap-start my-5 mx-4 md:mx-0 md:flex md:justify-center lg:min-h-[calc(100vh-198px)] lg:items-center xl:min-h-[calc(100vh-142px)] 2xl:min-h-[calc(100vh-96px)] 2xl:my-0'>
      <div className="flex flex-col gap-5 xl:grid xl:grid-cols-2 xl:gap-x-7 xl:gap-y-7">
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
