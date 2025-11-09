export default class Slide {
  constructor(burger) {
    this.burger = burger;

    this.body = document.body;
    this.html = document.documentElement;
    this.slideContent = document.getElementById("slideContentID");
    this.overlayBurgerMenu = document.getElementById("overlayBurgerMenuID");
    this.getBurgerElement = this.burger.getBurgerElement();

    this.isAnimation = false;

    // Клик по бургеру
    this.getBurgerElement.addEventListener("click", () => this.toggleSlide());
  }

  toggleSlide() {
    const isActive = this.slideContent.classList.contains("slide_content_active");

    if (isActive) {
      this.hideSlide();
    } else {
      this.showSlide();
    }
  }

  // Показ слайд-меню
  showSlide() {
    if (this.isAnimation) return;
    this.isAnimation = true;

    // Отключаем скролл
    this.body.style.overflow = "hidden";
    this.html.style.overflow = "hidden";

    // Добавляем/убираем классы для анимации
    this.burger.removeElement("slide_content_off", this.slideContent);
    this.burger.addElement("slide_content_active", this.slideContent);
    this.burger.addElement("overlay_active", this.overlayBurgerMenu);

    // Завершаем анимацию через задержку
    setTimeout(() => {
      this.isAnimation = false;
    }, 200);
  }

  // Скрытие слайд-меню
  hideSlide() {
    if (this.isAnimation) return;
    this.isAnimation = true;

    // Добавляем/убираем классы для анимации
    this.burger.addElement("slide_content_off", this.slideContent);
    this.burger.removeElement("slide_content_active", this.slideContent);
    this.burger.removeElement("overlay_active", this.overlayBurgerMenu);

    // После завершения анимации включаем скролл
    this.slideContent.addEventListener(
      "animationend",
      () => {
        this.isAnimation = false;
        this.body.style.overflow = "";
        this.html.style.overflow = "";
      },
      { once: true }
    );
  }
}
