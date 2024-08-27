const doc = document;

export class Technology {
  project;
  techContainer;

  constructor( name, image, cardId ) {
    this.project = this.getProject( cardId );
  }

  getProject = ( cardId ) => {
    return doc.getElementById( cardId );
  };

  createTechonologyContainer = () => {
    this.techContainer = doc.createElement("div");

    this.techContainer.classList("technology__container");
    this.techContainer.append( this.techContainer );
  };
}
