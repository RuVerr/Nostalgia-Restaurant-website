import MainSwitcher from "./MainSwitcher.js";
import MainMenuSwitcher from "./MainMenuSwitcher.js";
import HomeSwitcher from "./HomeSwitcher.js";

export default class indexSwitcherLang {
  constructor() {
    this.HomeSwitcher = new HomeSwitcher();
    this.MainMenuSwitcher = new MainMenuSwitcher();
    this.MainSwitcher = new MainSwitcher((lang) => {
      this.HomeSwitcher.switchLanguage(lang);
      this.MainMenuSwitcher.switchLanguage(lang);
    });
  }
}
