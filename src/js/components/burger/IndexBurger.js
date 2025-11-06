import Burger from "./MainBurger.js";
import Slide from "./BurgerSlide.js";
import Animation from "./BurgerAnimation.js";

export default class IndexBurger {
  constructor() {
    this.burger = new Burger();
    this.slide = new Slide(this.burger);
    this.animation = new Animation(this.burger, this.slide);
  }
}
