export default class Animation {
  constructor(burger, slide) {
    this.burger = burger;
    this.slide = slide;

    this.burgerLine = document.querySelectorAll(".burger_line");
    this.getBurgerElement = this.burger.getBurgerElement();
    this.getSlideElement = this.burger.getSlideElement();

    this.isAnimation = false;

    this.getBurgerElement.addEventListener("click", () => this.startAnimation());
  }

  startAnimation() {
    if (this.isAnimation) return;
    this.isAnimation = true;
    this.slide.toggleSlide();
    this.getSlideElement.addEventListener(
      "animationstart",
      () => {
        this.animateBurger();
      },
      { once: true }
    );
  }

  animateBurger() {
    let animationsLines = this.burgerLine.length;

    this.burgerLine.forEach((line) => {
      if (line.classList.contains("burger-anim-start")) {
        line.classList.remove("burger-anim-start");
        line.classList.add("burger-anim-end");
      } else if (line.classList.contains("burger-anim-end")) {
        line.classList.remove("burger-anim-end");
        line.classList.add("burger-anim-start");
      } else {
        line.classList.add("burger-anim-start");
      }

      line.addEventListener(
        "animationstart",
        () => {
          animationsLines--;
          if (animationsLines === 0) {
            this.isAnimation = false;
          }
        },
        { once: true }
      );
    });
  }
}
