class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
}

class Employees extends Person {
    empCode: string;
    constructor(name: string, age: number, empCode: string) {
        super(name, age);
        this.empCode = empCode;
    }

    getEmpCodeByName() {
        return this.empCode + " " + this.name + super.getName();
    }
}

let emp2 = new Employees("John", 30, "EMP001");
console.log(emp2.getEmpCodeByName());
