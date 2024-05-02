{


    // type assertion 


    // example-1

    let anything: any;

    anything = "this is a example-1 of type assertion or type narrowing";

    (anything as string)
    // now i can access all properties of an string using dot( . )


    anything = 10000;

    (anything as number)
    // now its type became number 



    // example-2

    const kgToGram = (value: string | number): string | number | undefined => {
        if (typeof value === "number") {
            return `${value} KG to gram is ${value * 1000} gram`;
        }
        if (typeof value === "string") {
            return `${value} KG to gram is ${parseFloat(value) * 1000} gram`
        }
        if (typeof value === "undefined") {
            return `Value not found undefined`
        }
    }


    const result1 = kgToGram(10) as number;
    const result2 = kgToGram("10") as string;

    console.log(result1, result2);







}