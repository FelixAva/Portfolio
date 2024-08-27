const path = '../../sources/data/projects.json';

fetch( path )
  .then( response => response.json() )
  .then( ({ projects }) => {
    projects.map( ( project ) => {
      console.log( project );
    });
  })
  .catch( error => console.log( error ) )
;
