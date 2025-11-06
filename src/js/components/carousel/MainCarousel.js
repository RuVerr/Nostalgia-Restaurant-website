export default class Carousel {
  constructor() {
    this.carouselBox = document.getElementById("carouselBoxID");
}

  getElement() {
    return this.carouselBox;
  }

  moveNext() {
    this.carouselBox.classList.add("carouselNext");
  }

  moveBack() {
    this.carouselBox.classList.add("carouselBack");
  }

  appendChild() {
    this.carouselBox.appendChild(this.carouselBox.firstElementChild);
  }

  prependChild() {
    this.carouselBox.prepend(this.carouselBox.lastElementChild);
  }

  resetCarousel() {
    this.carouselBox.classList.remove("carouselNext", "carouselBack");

    this.carouselBox.style.transition = "none";
    this.carouselBox.style.transform = "translate: (0)";

    setTimeout(() => {
      this.carouselBox.style.transition = "";
    }, 100);
  }
}
