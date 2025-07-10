import { ProjectCard } from "../";

import type { ProjectDetails } from "../../types/Project";

const projectsList: ProjectDetails[] = [ //* Temporal pseudo - JSON. Firebase/Supabse next update
  {
    id: 1,
    title: 'EDUCAPP',
    description: 'Project presented at ANUIES4MX (internship to Japan). Generated personalized forms using the OpenAI API. Built a mobile app to display and manage and manage assessments. Implemented dynamic form components',
    stack: ['React Native', 'TypeScript', 'OpenAI API'],
    image: ''
  },
  {
    id: 2,
    title: 'Music App',
    description: 'Mobile application with authentication and API Consumption (Last.fm). Retrieved musical data (artists and details) from an external API. Validated Login and registration forms. Managed user sessions with local storage',
    stack: ['React Native', 'TypeScript', 'JavaScript', 'Zustand', 'Axios', 'React Hook Forms', 'TanStack Query'],
    image: ''
  },
  {
    id: 3,
    title: 'Template',
    description: 'description',
    stack: ['React', 'TypeScript', 'JavaScript'],
    image: ''
  },
]


const Projects = () => {
  return (
    <section id="projects" className='snap-start min-h-[calc(100vh-96px)] bg-white flex justify-center items-center'>
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
