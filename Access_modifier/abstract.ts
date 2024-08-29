abstract class employ {
    constructor(private name: string) {}
    abstract getSalary():number;

    compensationStatement(){
        console.log(`Name: ${this.name}, Salary: ${this.getSalary()}`)
    }
}

// const e1 = new employ("Doilon"); //error

class FullTimeEmploy extends employ {
    constructor(name: string, private salary: number){
        super(name);
    }

    getSalary(): number {
        return this.salary;
    }
}

const test1 = new FullTimeEmploy("Doilon", 1000);
test1.compensationStatement();