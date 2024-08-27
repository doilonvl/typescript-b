// Object
let pro1: {
    name: string,
    age: number
} = {
    name: "Doilon",
    age: 18
}

// Array
let myarr: (number | string | boolean)[] = 
[1, 2, 3, 4, 5, "ab"];

let myarr2: Array<number | string | boolean> = 
[1, 2, 3, 4, 5, "ab"];

// Tuple 
let mytuple: [number, string, boolean?] = [1, "a", true];

mytuple = [2, "b"];

console.log(mytuple);
