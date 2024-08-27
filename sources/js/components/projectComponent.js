class Project extends HTMLElement {
  id;
  card;
  btnsContainer;

  constructor({ id, image, title, description, technologies }) {
    super();

    this.id = id;
  }
}

export default Project;
