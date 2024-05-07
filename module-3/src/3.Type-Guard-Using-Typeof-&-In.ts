{


    type NormalUser = {
        name: "Muzahid";
    }

    type AdminUser = {
        name: "MdMuzahid";
        role: "admin"
    }


    const getUser = (user: AdminUser | NormalUser) => {
        if ("role" in user) {
            console.log(`Hello admin, welcome to the Super Power`);
        } else {
            console.log(`wake up to the Reality`);
        }
    };

    const user: NormalUser = {
        name: "Muzahid"
    }


    const adminUser: AdminUser = {
        name: "MdMuzahid",
        role: "admin"
    }

    getUser(user);
    getUser(adminUser);















}