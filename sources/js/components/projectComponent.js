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

    // Create no-container content; image, title, description.
    this.createImage( image );
    this.createTitle( title );
    this.createDescription( description );

    // Create buttons
    this.btnsContainer = this.createButtonsContainer();

    this.createButton("Project");
    this.createButton("GitHub");
  }

  /* ---------------------Card methods--------------------- */
  createCard = () => {
    const projects = doc.getElementById("projects__container");

    projects.appendChild(doc.createElement('div'));

    return projects.lastElementChild;
  };

  addIdToCard = () => this.card.id = this.id;

  addClassToCard = () => this.card.classList.add("project_card");

  /* ---------------------Card content methods--------------------- */
  createImage = ( image ) => {
    const img = doc.createElement("img");

    img.src = `/sources/images/${ image }.png`;
    img.alt = "Project model image";

    img.classList.add("project_image");
    this.card.append( img );
  };

  createTitle = ( title ) => {
    const h3 = doc.createElement("h3");
    h3.innerText = title;

    h3.classList.add("project_title");
    this.card.append( h3 );
  };

  createDescription = ( description ) => {
    const desc = doc.createElement("p");
    desc.innerText = description;

    desc.classList.add("project_description");
    desc.classList.add("paragraph");
    this.card.append( desc );
  };

  /* ---------------------Card buttons methods--------------------- */
  createButtonsContainer = () => {
    const btnsContainer = doc.createElement("div");

    btnsContainer.classList.add("project_buttons");
    this.card.append( btnsContainer );

    return btnsContainer;
  };

  createButton = ( btnType ) => {
    const button = doc.createElement("button");

    button.innerText = btnType;
    btnType === "Project"
      ? button.classList.add("blue__btn")
      : button.classList.add("yellow__btn")
    ;

    button.classList.add("button");
    this.btnsContainer.append(button);
  };
}
