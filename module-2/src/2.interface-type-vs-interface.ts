{


    // type alias

    type Lenovo = {
        brand: string;
        model: string;
        price: number
    };


    type LenovoDetails = {
        processor: string;
        processorBrand: string;
        ram: string
    };


    // creating a new by two separate type using intersection 

    type MyLaptop = Lenovo & LenovoDetails;

    const myWorkstationLaptop: MyLaptop = {
        brand: "lenovo thinkpad",
        model: "t450s",
        price: 70000,
        processor: "core i5 5th gen",
        processorBrand: "intel",
        ram: "8 GB"
    };

    console.log(myWorkstationLaptop);


    // =============================================================

    // interface

    interface Laptop {
        brand: string;
        model: string;
        price: number
    };

    interface LaptopInfo extends Laptop {
        processor: string;
        processorBrand: string;
        ram: string
    };


    const MyLaptop: LaptopInfo = {
        brand: "lenovo thinkpad",
        model: "t450s",
        price: 70000,
        processor: "core i5 5th gen",
        processorBrand: "intel",
        ram: "8 GB"
    };

    console.log(MyLaptop, "type crated using interface");






    // type alias

    // array 
    type MyNewArray = number[];

    // function
    type MyFunc = (value1: number, value2: number) => number;



    // interface


    //array
    interface MyArr {
        [index: number]: number;
    };

    //function

    interface MyNewFunc {
        (value1: number, value2: number): number;
    };





}