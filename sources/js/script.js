import { Project } from '/sources/js/components/projectComponent.js';
import { ThemeManager } from './theme-manager/theme-manager.js';

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

const logo = document.getElementsByClassName("logo")[0];
const theme = new ThemeManager();
const style = document.documentElement.style;

window.addEventListener('load', () => {
  theme.getCurrentThemeValue();
  theme.loadCurrentTheme( style );
})

logo.addEventListener('click', () => {
  theme.changeCurrentThemeValue();
  theme.loadCurrentTheme( style );
  theme.setCurrentThemeValue();
});
