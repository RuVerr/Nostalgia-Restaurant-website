export default class PopUpAnimation {
  constructor(mainPopUp) {
    this.mainPopUp = mainPopUp;
    this.headerPopUpForm = mainPopUp.headerPopUpForm;
    this.overlay = mainPopUp.overlayHeaderPopup;
  }

  activatePopUp() {
    this.overlay.style.visible = "visibility";

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
    }, 500);
  }
}
