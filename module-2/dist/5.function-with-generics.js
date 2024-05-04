"use strict";
{
    // create function with generic
    const createArrayWithGenerics = (params) => {
        return [params];
    };
    const arrayOfString = createArrayWithGenerics("Bangladesh");
    const arrayOfObject = createArrayWithGenerics({ brand: "lenovo", model: "ThinkPad t450s" });
    const arrayOfBoolean = createArrayWithGenerics(true);
    console.log(arrayOfBoolean, arrayOfObject, arrayOfString);
    // how to create tuple with generics
    const tupleArray = (par1, par2) => {
        return [par1, par2];
    };
    const stringTuple = tupleArray("string", "string");
    const tupleWithGeneric = tupleArray("this is string", { name: "name", price: 70987 });
    console.log(stringTuple, tupleWithGeneric);
}
