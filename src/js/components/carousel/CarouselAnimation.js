export default class Animation {
  constructor(carousel) {
    this.carousel = carousel;
    
    this.carousel.carouselBox.addEventListener("animationend" , (e) =>{
      this.animationEnd(e)
    })
  }

  animationEnd(e){
    if (e.animationName === "carouselNext") {
      this.carousel.appendChild();
      this.carousel.resetCarousel()
    }else if(e.animationName === "carouselBack"){
      this.carousel.prependChild();
      this.carousel.resetCarousel()
    }
  }
}