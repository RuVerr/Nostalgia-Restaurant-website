import Carousel from "./MainCarousel.js";
import Navigation from "./CarouselNavigation.js";
import Animation from "./CarouselAnimation.js";
import AutoSlide from "./CarouselAutoSlide.js";

export default class IndexCarousel {
  constructor() {
    this.carousel = new Carousel();

    if (!this.carousel.getElement()) return;

    this.navigation = new Navigation(this.carousel);
    this.animation = new Animation(this.carousel);
    this.autoSlide = new AutoSlide(this.carousel, this.carousel.getElement());

    this.autoSlide.startAutoSlide();
  }
}
