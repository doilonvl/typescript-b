class Circle {
    static pi = 3.14;
    test: number = 69;

    static calculateArea(radius: number) {
        return Circle.pi * radius * radius;
    }
}

console.log(Circle.calculateArea(5));
console.log(Circle.pi);
// console.log(Circle.test); // error: cần dùng static

