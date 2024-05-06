"use strict";
{
    // oop - inheritance
    class Parent {
        constructor(name, price, model) {
            this.name = name;
            this.price = price;
            this.model = model;
        }
        ;
        getDecision() {
            console.log(`this ${this.name} laptop is great laptop for ${this.price} price`);
        }
        ;
    }
    class Lenovo extends Parent {
        constructor(name, price, model) {
            super(name, price, model);
        }
        ;
    }
    ;
    const lenovoLaptop = new Lenovo("lenovo", 75000, "legion 5");
    class HP extends Parent {
        constructor(name, price, model, dedicatedGraphics) {
            super(name, price, model);
            this.dedicatedGraphics = dedicatedGraphics;
        }
        ;
        isWorkstationGrad() {
            console.log(`this ${this.name} laptop is great laptop for ${this.price} price with ${this.dedicatedGraphics}`);
        }
        ;
    }
    ;
    const hpLaptop = new HP("lenovo", 75000, "legion 5", true);
    lenovoLaptop.getDecision();
    hpLaptop.isWorkstationGrad();
}
