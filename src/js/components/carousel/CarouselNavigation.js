export default class Navigation {
  constructor(carousel) {
    this.carousel = carousel;

    this.carouselBtnNext = document.getElementById("carouselBtnNextID");
    this.carouselBtnBack = document.getElementById("carouselBtnBackID");

    this.carouselBtnNext.addEventListener("click", () => this.carousel.moveNext());
    this.carouselBtnBack.addEventListener("click", () => this.carousel.moveBack());
  }
}
