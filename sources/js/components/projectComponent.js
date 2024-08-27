const doc = document;

export class Project {
  id;
  card;
  btnsContainer;

  constructor({ id, image, title, description, technologies }) {
    this.id = id;

    // Create Project Card.
    this.card = this.createCard();

    this.addIdToCard();
    this.addClassToCard();
  }

  /* ---------------------Card functions--------------------- */
  createCard = () => {
    const projects = doc.getElementById("projects__container");

    projects.appendChild(doc.createElement('div'));

    return projects.lastElementChild;
  };

  addIdToCard = () => this.card.id = this.id;

  addClassToCard = () => this.card.classList.add("project_card");
}
