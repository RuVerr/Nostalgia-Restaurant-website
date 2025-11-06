// Мозг

export default class Burger {
    constructor() {
        this.burger = document.getElementById("burgerID");
        this.slideContent = document.getElementById("slideContentID");
    }

    getBurgerElement(){
        return this.burger;
    };

    getSlideElement(){
        return this.slideContent;
    }

    addElement(className, target){
        if(!target) return;
        target?.classList.add(className);
    }

    removeElement(className, target){
        if (!target) return;
        target?.classList.remove(className);
    }

}