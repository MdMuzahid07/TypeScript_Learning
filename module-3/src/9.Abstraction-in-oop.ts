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

        test() {
            console.log("im just testing the car");
        }

    };



    const audiCar = new Car();

    audiCar.startEngine();

    // create an abstraction using interface =======>>>> end here


    // ==========================================================================


    // create an abstraction using abstract class =======>>>> start here





    // create an abstraction using abstract class =======>>>> end here
























}