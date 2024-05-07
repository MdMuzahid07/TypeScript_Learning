"use strict";
{
    ;
    // implementation
    class Car {
        startEngine() {
            console.log("engine started");
        }
        ;
        stopEngine() {
            console.log("im stopping the engine");
        }
        ;
        move() {
            console.log("im moving the car");
        }
        ;
        test() {
            console.log("im just testing the car");
        }
    }
    ;
    const audiCar = new Car();
    audiCar.startEngine();
    // create an abstraction using interface =======>>>> end here
    // ==========================================================================
    // create an abstraction using abstract class =======>>>> start here
    class Car2 {
    }
    ;
    class Tesla extends Car2 {
        startEngine() {
            console.log("Tesla started the engine");
        }
        ;
        stopEngine() {
            console.log("Tesla stopped the engine");
        }
        ;
        move() {
            console.log("Tesla moving");
        }
        ;
        test() {
            console.log("im testing my new Tesla Car");
        }
    }
    ;
    const myCar = new Tesla();
    myCar.startEngine();
    // create an abstraction using abstract class =======>>>> end here
}
