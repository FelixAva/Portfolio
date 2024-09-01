import { themes } from '/sources/config/theme/theme.js';

export class ThemeManager {
  currentTheme;

  getCurrentThemeValue = () => {
    this.currentTheme = Number( localStorage.getItem("theme") ); // If the theme value is undefined, the "Number()" will trasnform it into a 0
  };

  changeCurrentThemeValue = () => {
    if (this.currentTheme >= themes.length - 1) return this.currentTheme = 0;

    this.currentTheme++;
  };

  setCurrentThemeValue = () => {
    localStorage.setItem("theme", this.currentTheme);
  };

  loadCurrentTheme = ( style ) => {
    const {
      primary,
      secondary,
      accent,
      background,
      black
    } = themes[ this.currentTheme ];

    style.setProperty("--primary", primary);
    style.setProperty("--secondary", secondary);
    style.setProperty("--accent", accent);
    style.setProperty("--background", background);
    style.setProperty("--black", black);
  };
}
