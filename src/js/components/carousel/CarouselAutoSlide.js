export default class AutoSlide {
    constructor(carousel,carouselDomElement) {
        this.buttonBox = document.getElementById("buttonBoxID")
        
        this.carousel = carousel;
        this.carouselDomElement = carouselDomElement;
        this.autoSlideInterval = null;
        this.isAutoSlide = false;

        this.buttonBox.addEventListener("mouseenter", () => {
            this.stopAutoSlide();
        });
        this.buttonBox.addEventListener("mouseleave", () => {
            this.startAutoSlide();
        });
    }

    startAutoSlide(){
        this.autoSlideInterval = setInterval(() => this.carousel.moveNext(), 2000);
    }

    stopAutoSlide(){
        clearInterval(this.autoSlideInterval)
        this.autoSlideInterval = null
    }
}