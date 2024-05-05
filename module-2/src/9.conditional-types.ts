{

    type Vehicle = {
        car: string;
        bike: string;
        ship: string;
    }

    type CheckVehicle<T> = T extends Vehicle ? true : false;

    type hasBike = CheckVehicle<"bike">;











}