// main.js
import Burger from "./components/burger/IndexBurger.js";
import Carousel from "./components/carousel/IndexCarousel.js";
import HeaderPopUp from "./components/headerPopUp/IndexPopUp.js";
import FormHandler from "./form/FormHandler.js";
import SwitcherLang from "./components/switcherLang/IndexSwitcherLang.js";

document.addEventListener("DOMContentLoaded", () => {
  new Burger();
  new HeaderPopUp();
  new Carousel();
  new FormHandler();
  new SwitcherLang();
});
