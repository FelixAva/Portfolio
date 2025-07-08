import type { ProjectDetails } from "../../types/Project";

const ProjectCard = ({
  id,
  title,
  description,
  stack,
  image
}: ProjectDetails) => {
  return (
    <div id={title.toLowerCase() + id}>
      <div>
        <img src="https://placehold.co/250X250.png" alt={title + "'s image representation"} className="rounded-2xl" />

        <h3>{ title }</h3>
        <div>
          <button>Github</button>
          <button>Details</button>
        </div>
      </div>

      <div>
        Technologies map
      </div>

      <p>{ description }</p>
    </div>
  )
};

export default ProjectCard;
