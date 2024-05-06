{


    // if what to convert a type with another type then ue use mapped 


    type area = {
        height: number;
        width: number
    };


    type areaString = {
        [key in keyof area]: string
    };

    const myArea: areaString = {
        height: "908579876",
        width: "0986"
    }


    // console.log(myArea);


    // mapped with generic, and make it ultimate flexible


    type MyArea<T> = {
        [key in keyof T]: T[key];
    };



    const area1: MyArea<{ height: number; width: number }> = {
        height: 985,
        width: 9875
    }


    console.log(area1);





}