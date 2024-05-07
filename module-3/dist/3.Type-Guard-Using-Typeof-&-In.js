"use strict";
{
    const getUser = (user) => {
        if ("role" in user) {
            console.log(`Hello admin, welcome to the Super Power`);
        }
        else {
            console.log(`wake up to the Reality`);
        }
    };
    const user = {
        name: "Muzahid"
    };
    const adminUser = {
        name: "MdMuzahid",
        role: "admin"
    };
    getUser(user);
    getUser(adminUser);
}
