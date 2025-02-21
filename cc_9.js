// Task 1: Creating an Employee Class
class Employee {
    // Creating a class with employee properties
    constructor (name, id, department, salary) {
        this.name = name; 
        this.id = id;
        this.department = department;
        this.salary = salary;
    }
    // Adding a method that returns a formatted string of employee details
    getDetails () {
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`;
    }
    // Adding a method that returns the employee’s annual salary
    calculateAnnualSalary() {
        return this.salary * 12;
    }
}
// Test case
const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000); // Employee object 
console.log(emp1.getDetails()); // Expected output: "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"
console.log(emp1.calculateAnnualSalary()); // Expected output: 60000


// Task 2: Creating a Manager Class (Inheritance & Method Overriding)
class Manager extends Employee {
    // Creating a Manager class that extends Employee
    constructor (name, id, department, salary, teamSize) {
        super (name, id, department, salary); // Calling Employee constructor 
        this.teamSize = teamSize; // Adding a new property teamSize 
    }
    // Overriding getDetails() to include the team size
    getDetails () {
        return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`;
    }
    // Adding a method that returns 10% of the manager’s annual salary
    calculateBonus() {
        return this.calculateAnnualSalary() * 0.1;
    }
}
// Test case
const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
console.log(mgr1.getDetails()); // Expected output: "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"
console.log(mgr1.calculateBonus()); // Expected output: 9600
