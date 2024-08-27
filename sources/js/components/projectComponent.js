const doc = document;

class Project extends HTMLElement {
  id;
  card;
  btnsContainer;

  constructor({ id, image, title, description, technologies }) {
    super();

    this.id = id;
    this.card = this.createCard;
  }

  /* ---------------------Card functions--------------------- */
  createCard = () => {
    const projects = doc.getElementById("projects__container");

    projects.appendChild(doc.createElement('div'));

    return projects.lastElementChild;
  };
}

export default Project;
