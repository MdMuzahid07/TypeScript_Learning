{



    const student = <T extends { id: string, name: string, email: string }>(parameter: T): T[] => {
        return [parameter]
    };

    type StudentType = {
        role: string;
        salary: number;
        id: string;
        name: string;
        email: string
    }

    const student1 = student<StudentType>({
        role: "senior web developer", salary: 100000,
        id: "9a67s0df",
        name: "Muzahid",
        email: "mdmuzahid.dev@gmail.com"
    })


    console.log(student1);














}