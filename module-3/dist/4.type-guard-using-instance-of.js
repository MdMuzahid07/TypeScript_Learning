"use strict";
{ // creating block scope
    // type guard or narrowing using instanceof 
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
            console.log("cat can Meow");
        }
    }
    // smart way to handle it
    // we have to specify here the return type, otherwise our getAnimal function will be confused about, is this a dog , or cat type, because we are returning here just true or false, means boolean value
    // ==============================================
    // const isDog = (animal: Animal): boolean => {
    //     return animal instanceof Dog;
    // }; // its return a boolean value
    const isDog = (animal) => {
        return animal instanceof Dog;
    }; // we have to call isDog function in if(isDog(animal)) , and have to send animal;
    // const isCat = (animal: Animal): boolean => {
    //     return animal instanceof Cat;
    // }; // its return a boolean value
    const isCat = (animal) => {
        return animal instanceof Cat;
    }; // we have to call isCat function in if(isCat(animal)) , and have to send animal;
    // here im using Animal class as an Type
    const getAnimal = (animal) => {
        // here i cant call makeBark(); because in Animal class only 2 properties and one method available, makeBark , and makeMeow, its not availableable in Animal class, for available here, we have to send this through getAnimal arguments; after that we have ensure ts its a real property of dog, or cat, for this, we have to use instaceof 
        // we can use isDog, isCat function, but also this is a write syntax, and works well
        if (animal instanceof Dog) {
            animal.makeBark();
            console.log("hi from dog");
        }
        else if (animal instanceof Cat) {
            animal.makeMeow();
            console.log(" meow");
        }
        else {
            animal.makeSound();
        }
    };
    const dog = new Dog("mr. dog", "Dog");
    const cat = new Cat("mr. cat", "Cat");
    // getAnimal(dog);
    getAnimal(cat);
} // creating block scope
