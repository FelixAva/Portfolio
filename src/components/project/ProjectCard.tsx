import type { ProjectDetails } from "../../types/Project";
import { Link, TechnologyTag } from "../";


const ProjectCard = ({
  id,
  title,
  description,
  stack,
  // image,
  repo
}: ProjectDetails) => {

  return (
    <div id={title.toLowerCase() + id} className="w-2xl justify-between">
      <div className="flex">
        <img src="https://placehold.co/250X250.png" alt={title + "'s image representation"} className="rounded-2xl" />

        <div className="w-full flex flex-col text-center justify-between py-4">
          <h3 className="text-2xl font-semibold">{ title }</h3>
          <div className="flex flex-col items-center justify-center gap-4 mt-4">
            <Link src={repo} title="Details" icon="circle-arrow-right-01" style="button" />
            <Link src={repo} title="GitHub" icon="github-01" style="button" />
          </div>
        </div>
      </div>

      <div className="py-3.5 flex flex-wrap gap-x-5 gap-y-2">
        {
          stack.map((name) => (
            <TechnologyTag key={title + name} name={name} />
          ))
        }
      </div>

      <p className="text-lg">{ description }</p>
    </div>
  )
};

export default ProjectCard;
