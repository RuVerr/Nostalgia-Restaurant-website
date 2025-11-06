import { menuTranslation } from "../../../Data/menuTranslation.js";

export default class MainMenuSwitcher {
  constructor() {
    this.mainMenuContent = document.getElementById("#main_menu_contentID");
    this.DOMelements();
  }

  DOMelements() {
    if (this.mainMenuContent) {
      if (!this.mainMenuContent) return;

      // Проходим по количеству каждой категории
      menuTranslation.en.menuTitle.forEach((category, catIndex) => {
        this.menuContent = document.createElement("div");
        const mainMenuTitle_h2 = document.createElement("h2");
        const menuList_ul = document.createElement("ul");

        this.menuContent.appendChild(mainMenuTitle_h2);
        this.menuContent.appendChild(menuList_ul);

        this.menuContent.classList.add("menu_content");
        mainMenuTitle_h2.classList.add("main_menu_title", "title_global");
        mainMenuTitle_h2.id = category.replace(" ", "").toLocaleLowerCase() + "ID"

        console.log(mainMenuTitle_h2);
        
        
        menuList_ul.classList.add("main_menu_list");

        this.mainMenuContent.appendChild(this.menuContent);

        menuTranslation.en.menuTitleItem[catIndex].forEach((el, index) => {
          const menuListItem_li = document.createElement("li");
          const titleAndDesc_box = document.createElement("div");
          const spanPrice = document.createElement("span");
          const titleAndDescTitle_h2 = document.createElement("h3");
          const titleAndDescDesc_P = document.createElement("p");

          menuListItem_li.classList.add("main_menu_list_item");
          spanPrice.classList.add("main_menu_price_item", "menu_title_global");
          titleAndDesc_box.classList.add("main_menu_title_and_desc");
          titleAndDescTitle_h2.classList.add("main_menu_title_item", "menu_title_global");
          titleAndDescDesc_P.classList.add("main_menu_desc");

          menuListItem_li.appendChild(titleAndDesc_box);
          menuListItem_li.appendChild(spanPrice);
          titleAndDesc_box.appendChild(titleAndDescTitle_h2);
          titleAndDesc_box.appendChild(titleAndDescDesc_P);

          spanPrice.textContent = menuTranslation.en.itemPrice[catIndex][index];

          menuList_ul.appendChild(menuListItem_li);
        });
      });
    }
  }

  switchLanguage(lang) {
    const mainMenuTitle = document.querySelectorAll(".main_menu_title");
    const mainMenuTitleItem = document.querySelectorAll(".main_menu_title_item");
    const mainMenuDesc = document.querySelectorAll(".main_menu_desc");

    const currentLang = menuTranslation[lang];

    if (mainMenuTitle && currentLang.menuTitle) {
      mainMenuTitle.forEach((el, index) => {
        el.textContent = currentLang.menuTitle[index];
      });
    }

    if (mainMenuTitleItem && currentLang.menuTitleItem) {
      const flatTitleItem = currentLang.menuTitleItem.flat();
      mainMenuTitleItem.forEach((el, index) => {
        el.textContent = flatTitleItem[index];
      });
    }

    if (mainMenuDesc && currentLang.menuDescItem) {
      const flatDesc = currentLang.menuDescItem.flat();
      mainMenuDesc.forEach((el, index) => {
        el.textContent = flatDesc[index];
      });
    }
  }
}
