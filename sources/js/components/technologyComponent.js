const doc = document;

export class Technology {
  project;
  techContainer;

  constructor( name, image, cardId ) {
    this.project = this.getProject( cardId );

    this.createTechonologyContainer();
  }

  getProject = ( cardId ) => {
    return doc.getElementById( cardId );
  };

  createTechonologyContainer = () => {
    this.techContainer = doc.createElement("div");

    this.techContainer.classList.add("technology__container");
    this.project.getElementsByTagName("div")[0].append( this.techContainer );
  };

}
