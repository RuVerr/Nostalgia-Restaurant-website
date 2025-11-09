export default class PopUpAnimation {
  constructor(mainPopUp) {
    this.mainPopUp = mainPopUp;
    this.headerPopUpForm = mainPopUp.headerPopUpForm;
    this.overlay = mainPopUp.overlayHeaderPopup;
    this.body = document.body;
    this.html = document.documentElement;
  }

  activatePopUp() {
    this.overlay.style.visible = "visibility";
    this.body.style.overflow = "hidden";
    this.html.style.overflow = "hidden";

    requestAnimationFrame(() => {
      this.overlay.classList.add("overlay_active");
      this.overlay.classList.remove("overlay_off");
    });

    this.headerPopUpForm.classList.add("popUpAnim-active");
    this.headerPopUpForm.classList.remove("popUpAnim-off");
  }

  deactivatePopUp() {
    const { headerPopUpForm, overlayHeaderPopup } = this.mainPopUp;

    headerPopUpForm.classList.add("popUpAnim-off");

    setTimeout(() => {
      overlayHeaderPopup.classList.add("overlay_off");
      this.body.style.overflow = "";
      this.html.style.overflow = "";
    }, 500);
  }
}
