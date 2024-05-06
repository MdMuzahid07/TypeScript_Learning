{



    // create function with generic

    const createArrayWithGenerics = <T>(params: T): T[] => {
        return [params]
    };


    const arrayOfString = createArrayWithGenerics<string>("Bangladesh");

    type Laptop = {
        brand: string;
        model: string
    }

    const arrayOfObject = createArrayWithGenerics<Laptop>({ brand: "lenovo", model: "ThinkPad t450s" });


    const arrayOfBoolean = createArrayWithGenerics<boolean>(true);

    console.log(arrayOfBoolean, arrayOfObject, arrayOfString);




    // how to create tuple with generics

    const tupleArray = <T, Y>(par1: T, par2: Y): [T, Y] => {
        return [par1, par2];
    };

    const stringTuple = tupleArray<string, string>("string", "string");

    const tupleWithGeneric = tupleArray<string, { name: string, price: number }>("this is string", { name: "name", price: 70987 });

    console.log(stringTuple, tupleWithGeneric);




    const Students = <T>(student: T) => {
        const course = "NEXT Level Programmer";
        return {
            ...student,
            course
        }
    };

    interface Student1Type {
        name: string,
        email: string
    }

    const student1 = Students<Student1Type>({ name: "x", email: "x@gmail.com" });


    type Student2Type = {
        name: string,
        email: string
    }

    const student2 = Students<Student2Type>({ name: "y", email: "y@gmail.com" });


    console.log(student1, student2);


























}