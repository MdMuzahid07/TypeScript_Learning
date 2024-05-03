{

    // generic array
    type GenericArray<T> = Array<T>


    const numberArray: GenericArray<number> = [1, 2, 3, 4, 5];

    const stringArray: GenericArray<string> = ["hello", "world", "universe"];

    const booleanArray: GenericArray<boolean> = [true, false, true];




    // generic tuple

    type GenericTuple<x, y> = [x, y];

    const laptop: GenericTuple<string, string> = ["lenovo ", "dell"];












}