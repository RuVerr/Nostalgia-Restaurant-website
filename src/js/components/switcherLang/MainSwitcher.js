export default class MainSwitcher {
  constructor(onLanguageChange) {
    this.switcherButton = document.querySelectorAll(".lang_button");
    this.onLanguageChange = onLanguageChange;

    let saveLang = localStorage.getItem("lang") || "am";
    this.onLanguageChange?.(saveLang);

    this.handleClick();
  }

  handleClick() {
    this.switcherButton.forEach((button) => {
      button.addEventListener("click", () => {
        //Получем строку которая в data-set
        const lang = button.dataset.lang;
        //Записываем в локальное хранилеще что бы он получал и на других страницах
        localStorage.setItem("lang", lang);
        //Передаем в функцию смены языка
        this.onLanguageChange?.(lang);

        this.updateActiveButton();
      });
    });

    this.updateActiveButton();
  }

  updateActiveButton() {
    const saveLang = localStorage.getItem("lang");

    this.switcherButton.forEach((btn) => {
      if (btn.dataset.lang === saveLang) {
        btn.style.backgroundColor = "#fafafa";
        btn.style.color = "#2c6e49";
      } else {
        btn.style.backgroundColor = "";
        btn.style.color = "";
      }
    });
  }
}
