import type { ProjectDetails } from "../../types/Project";
import { Link, TechnologyTag } from "../";

const ProjectCard = ({
  id,
  title,
  description,
  stack,
  image,
  repo
}: ProjectDetails) => {

  return (
    <div id={title.toLowerCase() + id} className="md:justify-between md:w-2xl xl:w-xl 2xl:w-2xl">
      <div className="flex">
        <img src={image} alt={title + "'s image representation"} className="rounded-2xl w-[150px] h-full md:w-[250px]" />

        <div className="w-full flex flex-col text-center justify-between md:py-4">
          <h3 className="text-xl font-semibold md:text-2xl">{ title }</h3>

          <div className="flex flex-col items-center justify-center gap-2 md:gap-4 md:mt-4">
            <Link src={repo} title="Details" icon="circle-arrow-right-01" style="button" />
            <Link src={repo} title="GitHub" icon="github-01" style="button" />
          </div>
        </div>
      </div>

      <div className="py-2.5 flex flex-wrap gap-x-2 gap-y-1 md:py-3.5 md:gap-x-5 md:gap-y-2">
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
