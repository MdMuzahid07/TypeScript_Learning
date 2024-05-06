"use strict";
{
    const person1 = "bike";
    console.log(person1);
    const getPropertyByValue = (obj, key) => {
        return obj[key];
    };
    const user = {
        name: "Muzahid",
        role: "MERN Stack Developer"
    };
    const getKey = getPropertyByValue(user, "role");
    console.log(getKey);
}
