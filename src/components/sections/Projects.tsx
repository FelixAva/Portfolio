import { ProjectCard } from "../";

import type { ProjectDetails } from "../../types/Project";

const projectsList: ProjectDetails[] = [ //* Temporal pseudo - JSON. Firebase/Supabse next update
  {
    id: 1,
    title: 'Template',
    description: 'description',
    stack: [],
    image: ''
  },
  {
    id: 2,
    title: 'Template',
    description: 'description',
    stack: [],
    image: ''
  },
  {
    id: 3,
    title: 'Template',
    description: 'description',
    stack: [],
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
