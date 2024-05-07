{


    // Abstraction : 1. interface, abstract


    // create an abstraction using interface =======>>>> start here

    // idea
    interface Vehicle1 {
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    };

    // implementation

    class Car implements Vehicle1 {

        startEngine(): void {
            console.log("engine started");
        };

        stopEngine(): void {
            console.log("im stopping the engine");
        };

        move(): void {
            console.log("im moving the car");
        };

        test(): void {
            console.log("im just testing the car");
        }

    };



    const audiCar = new Car();

    audiCar.startEngine();

    // create an abstraction using interface =======>>>> end here


    // ==========================================================================


    // create an abstraction using abstract class =======>>>> start here



    // idea
    abstract class Car2 {
        abstract startEngine(): void

        abstract stopEngine(): void

        abstract move(): void

        abstract test(): void

    };



    // implementation
    class Tesla extends Car2 {

        startEngine(): void {
            console.log("Tesla started the engine");
        };

        stopEngine(): void {
            console.log("Tesla stopped the engine");
        };

        move(): void {
            console.log("Tesla moving");
        };

        test(): void {
            console.log("im testing my new Tesla Car");
        }

    };


    const myCar = new Tesla();

    myCar.startEngine();








    // create an abstraction using abstract class =======>>>> end here




}