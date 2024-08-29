const doc = document;

export class Technology {
  project;
  techContainer;

  constructor( image, cardId ) {
    this.project = this.getProject( cardId );

    this.createTechonologyContainer();
    this.createImage( image );
  }

  getProject = ( cardId ) => {
    return doc.getElementById( cardId );
  };

  createTechonologyContainer = () => {
    this.techContainer = doc.createElement("div");

    this.techContainer.classList.add("technology__container");
    this.project.getElementsByTagName("div")[0].append( this.techContainer );
  };

  createImage = ( image ) => {
    const img = doc.createElement("img");
    img.src = `/sources/images/technologies/${ image }.webp`;
    img.alt = "Technology used - Image";

    this.techContainer.append( img );
  };
}
