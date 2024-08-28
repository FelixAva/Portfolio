import { Technology } from '/sources/js/components/technologyComponent.js';

const doc = document;

export class Project {
  id;
  card;
  btnsContainer;

  constructor({ id, image, title, description, technologies, github_link }) {
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

    this.createProjectButton("Project");
    // this.createGitHubButton("GitHub", github_link);
    this.createButtonImg( 0, "rightArrowLight", "rightArrowDark" );
    // this.createButtonImg( 1, "githublighticon", "githubicon" );

    // Create technologies
    this.createTechnologiesContainer();
    this.getTechonologies( technologies );
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

  createProjectButton = ( btnType, href ) => {
    const a = doc.createElement("a");
    a.innerText = btnType;

    a.classList.add("button");
    a.classList.add("blue__btn");
    this.btnsContainer.append( a );
  };

  createButtonImg = ( position, imageNoHover, imageOnHover ) => {
    const a = this.btnsContainer.getElementsByTagName("a")[ position ];
    const img = doc.createElement("img");

    img.src = `/sources/images/${ imageNoHover }.png`;

    a.addEventListener("mouseleave", () => {
      img.src = `/sources/images/${ imageNoHover }.png`;
    });

    a.addEventListener("mouseenter", () => {
      img.src = `/sources/images/${ imageOnHover }.png`;
    });

    a.appendChild( img );
  };

  /* ---------------------Card technologies methods--------------------- */
  createTechnologiesContainer = () => {
    const techs = doc.createElement("div");

    techs.classList.add("technologies");
    this.card.append( techs );
    this.card.firstElementChild.after( techs );
  };

  getTechonologies = ( techs ) => {
    techs.map( ({ name, image }) => {
      new Technology( name, image, this.id );
    });
  };
}
