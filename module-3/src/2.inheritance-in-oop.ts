{

    // oop - inheritance



    class Parent {
        name: string;
        price: number;
        model: string;

        constructor(name: string, price: number, model: string) {
            this.name = name;
            this.price = price;
            this.model = model
        };

        getDecision() {
            console.log(`this ${this.name} laptop is great laptop for ${this.price} price`);
        };
    }






    class Lenovo extends Parent {


        constructor(name: string, price: number, model: string) {
            super(name, price, model);
        };

    };


    const lenovoLaptop = new Lenovo("lenovo", 75000, "legion 5");



    class HP extends Parent {

        dedicatedGraphics: boolean

        constructor(name: string, price: number, model: string, dedicatedGraphics: boolean) {
            super(name, price, model);
            this.dedicatedGraphics = dedicatedGraphics;
        };

        isWorkstationGrad() {
            console.log(`this ${this.name} laptop is great laptop for ${this.price} price with ${this.dedicatedGraphics}`);
        };

    };

    const hpLaptop = new HP("lenovo", 75000, "legion 5", true);


    lenovoLaptop.getDecision();

    hpLaptop.isWorkstationGrad();







}