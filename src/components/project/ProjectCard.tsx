import type { ProjectDetails } from "../../types/Project";

const ProjectCard = ({
  id,
  title,
  // description,
  // stack,
  // image
}: ProjectDetails) => {

  return (
    <div id={title.toLowerCase() + id} className="w-2xl justify-between">
      <div className="flex">
        <img src="https://placehold.co/250X250.png" alt={title + "'s image representation"} className="rounded-2xl" />

        <div className="w-full flex flex-col text-center justify-between py-4">
          <h3 className="text-2xl font-semibold">{ title }</h3>
          <div className="gap-2.5 flex flex-col">
            <button>Details + icon</button>
            <button>Github + icon</button>
          </div>
        </div>
      </div>

      <div className="py-2.5">
        Technologies map
      </div>

      <p className="text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus inventore minus excepturi facere optio quasi  necessitatibus modi quis? Nam, ducimus! Laborum ab, pariatur exercitationem sed sint aliquam reiciendis!</p>
    </div>
  )
};

export default ProjectCard;
