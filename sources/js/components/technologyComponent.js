const doc = document;

export class Technology {
  project;
  techContainer;

  constructor( name, image, cardId ) {
    this.project = this.getProject( cardId );

    this.createTechonologyContainer();
    this.createImage( image );
    this.createName( name );
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
    img.src = `/sources/images/${ image }.png`;
    img.alt = "Technology used - Image";

    this.techContainer.append( img );
  };

  createName = ( name ) => {
    const p = doc.createElement("p");
    p.innerText = name;

    this.techContainer.append( p );
  };
}
