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
}
