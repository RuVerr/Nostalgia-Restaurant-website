import { homeTranslation } from "../../../Data/homeTranslation.js";

export default class HomeSwitcher {
  constructor() {
    this.linkItem = document.querySelectorAll(".linkLang");
    this.burgerLinkLang = document.querySelectorAll(".burgerLinkLang");
    this.title = document.querySelectorAll(".titleLang");
    this.description = document.querySelectorAll(".descLang");
    this.menuTitle = document.querySelectorAll(".menuTitleLang");
    this.button = document.querySelectorAll(".buttonLang");
    this.footItem = document.querySelectorAll(".footLang");
  }

  switchLanguage(lang) {
    const currentLang = homeTranslation[lang];

    if (currentLang?.linkItem) {
      this.linkItem.forEach((el, index) => {
        el.textContent = currentLang.linkItem[index];
      });
    }

    if (currentLang?.linkItem) {
      this.burgerLinkLang.forEach((el, index) => {
        el.textContent = currentLang.linkItem[index];
      });
    }

    if (currentLang?.title) {
      this.title?.forEach((el, index) => {
        el.textContent = currentLang.title[index];
      });
    }

    if (currentLang?.desc) {
      this.description.forEach((el, index) => {
        el.textContent = currentLang.desc[index];
      });
    }

    if (currentLang?.menuTitle) {
      this.menuTitle.forEach((el, index) => {
        el.textContent = currentLang.menuTitle[index];
      });
    }

    if (currentLang?.button) {
      this.button.forEach((el, index) => {
        el.textContent = currentLang.button[index];
      });
    }

    if (currentLang?.footerItem) {
      this.footItem.forEach((el, index) => {
        el.textContent = currentLang.footerItem[index];
      });
    }
  }
}
