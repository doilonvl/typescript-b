// public: toan cuc
// private: trong class
// protected: trong class, lop con se ko truy cap dc
// readonly: khong cho phep thay doi gtri
class Employee {
    public empCode: string;
    empName: string;
    constructor(empCode: string, empName: string) {
        this.empCode = empCode;
        this.empName = empName;
    }
    getEmpCodeByName() {
        return this.empCode + " " + this.empName;
    }

    set currentEmpCode(empCode: string) {
        this.empCode = empCode;
    }

    get currentEmpCode() {
        return this.empCode;
    }
}

let emp = new Employee("a", "b");
emp.empName = "John";
emp.empCode = "EMP001";
emp.currentEmpCode = "EMP002";

console.log(emp);
