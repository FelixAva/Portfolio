import { themes } from '/sources/config/theme/theme.js';

export class ThemeManager {
  currentTheme;

  getCurrentThemeValue = () => {
    this.currentTheme = Number( localStorage.getItem("theme") ); // If the theme value is undefined, the "Number()" will trasnform it into a 0
  };

  changeCurrentThemeValue = () => {
    if (this.theme >= themes.length - 1) return this.theme = 0;

    this.theme++;
  };
}
