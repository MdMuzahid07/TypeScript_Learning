{



    type Vehicle = {
        bike: string;
        car: string;
        ship: string
    };

    type Owner = "bike" | "car" | "ship";

    type Owner2 = keyof Vehicle;

    const person1: Owner2 = "bike";

    console.log(person1);



    const getPropertyByValue = <T, Y extends keyof T>(obj: T, key: Y) => {
        return obj[key];
    };

    const user = {
        name: "Muzahid",
        role: "MERN Stack Developer"
    };

    const getKey = getPropertyByValue(user, "role");

    console.log(getKey);

























}