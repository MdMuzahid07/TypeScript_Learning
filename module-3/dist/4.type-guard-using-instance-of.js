"use strict";
{
    // instanceof guard
    class Animal {
        constructor(name, species) {
            this.name = name;
            this.species = species;
        }
        makeSound() {
            console.log("im making sound");
        }
    }
    class Dog extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeBark() {
            console.log("dog can bark");
        }
    }
    class Cat extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeMeow() {
            console.log("dog can Meow");
        }
    }
    // here im using Animal class as an Type
    const getAnimal = (animal) => {
        // here i cant call makeBark(); because in Animal class only 2 properties and one method available, makeBark , and makeMeow, its not availableable in Animal class, for available here, we have to send this through getAnimal arguments; after that we have ensure ts its a real property of dog, or cat, for this, we have to use instaceof 
        if (animal instanceof Dog) {
            animal.makeBark();
            console.log("hi from dog");
        }
        else if (animal instanceof Cat) {
            animal.makeMeow();
            console.log(" meow");
        }
    };
    const dog = new Dog("mr. dog", "Dog");
    const cat = new Cat("mr. cat", "Cat");
    // getAnimal(dog);
    getAnimal(cat);
}
