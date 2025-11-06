import PopUpAnimation from "./PopUpAnimation.js";

export default class MainPopUp {
  constructor() {
    // Элементы DOM
    this.body = document.body;
    this.nav = document.getElementById("navID");
    this.headerButtonForm = document.getElementById("headerButtonFormID");
    this.closeHeaderFormPopUp = document.getElementById("closeHeaderFormPopUpId");
    this.headerPopUpForm = document.getElementById("headerPopUpFormID");
    this.overlayHeaderPopup = document.getElementById("overlayHeaderPopup");

    // Анимации
    this.animations = new PopUpAnimation(this);

    // События
    this.#setupEventListeners();
  }

  #setupEventListeners() {
    this.headerButtonForm.addEventListener("click", () => this.showPopUp());
    this.closeHeaderFormPopUp.addEventListener("click", () => this.closePopUp());
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") this.closePopUp();
    });
  }

  addPopUpToDOM() {
    if (!this.nav.contains(this.headerPopUpForm)) {
      this.nav.append(this.headerPopUpForm);
      this.body.style.overflow = "hidden";
    }
    if (!this.nav.contains(this.overlayHeaderPopup)) {
      this.nav.append(this.overlayHeaderPopup);
    }
  }

  showPopUp() {
    this.addPopUpToDOM();
    this.animations.activatePopUp();
  }

  closePopUp() {
    this.animations.deactivatePopUp();

    this.headerPopUpForm.addEventListener("animationend", () => this.removePopUpFromDOM(), { once: true });

    this.headerPopUpForm.classList.remove("popUpAnim-active");
  }
}
