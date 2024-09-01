import { Project } from '/sources/js/components/projectComponent.js';

const path = '/sources/config/data/projects.json';

fetch( path )
  .then( response => response.json() )
  .then( ({ projects }) => {
    projects.map( ( project ) => {
      new Project( project );
    });
  })
  .catch( error => console.log( error ) )
;
