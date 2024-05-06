{

    // class Laptop {
    //     name: string;
    //     price: number;
    //     model: string;

    //     constructor(name: string, price: number, model: string) {
    //         this.name = name;
    //         this.price = price;
    //         this.model = model;
    //     }

    //     saySomething() { console.log(`this ${this.name} laptop model is ${this.model}, a great WorkStation Laptop`) }

    // }



    // making Laptop class again with ( Parameter Properties )


    class Laptop {
        constructor(public name: string, public price: number, public model: string) {

        }

        saySomething() {
            console.log(`this ${this.name} laptop model is ${this.model}, a great WorkStation Laptop`)
        }
    }






    const lenovo = new Laptop("lenovo", 75000, "t450s");

    lenovo.saySomething();























}