{



    type User = {
        name: string,
        id: number,
        email: string,
        call?: number
    }



    // pick 

    // single 
    type Name = Pick<User, "name">

    // or multiple
    type NameEmail = Pick<User, "name" | "email">



    // omit 

    // single 
    type user1 = Omit<User, "name">

    // or multiple 

    type user2 = Omit<User, "name" | "email">


    // required

    type user3 = Required<User>


    // partial

    type user4 = Partial<User>



    // readonly

    type user5 = Readonly<User>


    //record

    type User6 = Record<string, string>;

    const emptyObject: Record<string, unknown> = {};


    // empty object 





















}