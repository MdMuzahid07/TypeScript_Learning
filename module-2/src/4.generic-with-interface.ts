{


    // creating a interface for Developer

    interface Developer<T = null, B = null, W = null> {
        name: string;
        address: string;
        stack: string;
        salary: string;
        computer?: {
            brand: string;
            model: string
        },
        laptop?: T;
        bike?: B;
        watch?: W;
    };

    interface Laptop {
        brand: string,
        model: string
    }

    const poorDeveloper: Developer<Laptop> = {
        name: "Muzahid",
        address: "Dhaka, Bangladesh, Earth,  Milky Way Galaxy",
        stack: "MERN-Stack",
        salary: "700USD month",
        laptop: {
            brand: "Lenovo",
            model: "ThinkPad T450s"
        }
    }

    console.log(poorDeveloper);

















}