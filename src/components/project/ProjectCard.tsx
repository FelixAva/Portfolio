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
      {title + id}
    </div>
  )
};

export default ProjectCard;
