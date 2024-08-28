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