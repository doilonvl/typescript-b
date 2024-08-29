let age:number = 18;

if(age > 18){
    console.log("Yes");
}else{
    console.log("No");
}

switch(age){
    case 18:
        console.log("Yes");
        break;
    case 19:
        console.log("Yes");
        break;
    default:
        console.log("No");
}

const sum = (a: number, b: number, c?: number): number => {
    if(c) return a + b + c;
    return a + b;
}

const getSum = (...arr: number[]): number => {
    const total = 0;
    arr.forEach((e) => e+=total);
    return total;
}

const multiply = (n: number, ...x: number[]) => {
    return x.map((e) => e * n);
}

console.log(multiply(10, 2, 3));


// Overloading
function addNew(a:string , b:string): string;
function addNew(a: number, b: number): number;
function addNew(a: any, b: any){
    return a + b;
}