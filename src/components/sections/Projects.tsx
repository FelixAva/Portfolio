import { ProjectCard } from "../";

import type { ProjectDetails } from "../../types/Project";

const projectsList: ProjectDetails[] = [ //* Temporal pseudo - JSON. Firebase/Supabse next update
  {
    id: 1,
    title: 'Template',
    description: '',
    stack: [],
    image: ''
  },
  {
    id: 2,
    title: 'Template',
    description: '',
    stack: [],
    image: ''
  },
  {
    id: 3,
    title: 'Template',
    description: '',
    stack: [],
    image: ''
  },
]


const Projects = () => {
  return (
    <section id="projects" className='snap-start min-h-[calc(100vh-96px)] bg-white'>
      {
        projectsList.map((item: ProjectDetails) => (
          <ProjectCard {...item} />
        ))
      }
    </section>
  );
}

export default Projects;
