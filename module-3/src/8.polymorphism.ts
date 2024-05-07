{

    // polymorphism


    class Person {
        getSleep() {
            console.log("i am sleeping for 8 hours per day");
        }
    }


    class Student extends Person {
        getSleep() {
            console.log(" i am sleeping for 7:30 hours per day");
        }

    }


    class Developer extends Person {
        getSleep() {
            console.log(" im sleeping for 7 hours");
        }
    }


    const getSleepingHours = (param: Person) => {
        param.getSleep();
    }


    const person1 = new Person();
    const person2 = new Student();
    const person3 = new Developer();


    getSleepingHours(person1);
    getSleepingHours(person2);
    getSleepingHours(person3);











}