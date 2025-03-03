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
        return super.calculateAnnualSalary() * 0.1; 
    }
    // Task 4: Modifying to consider bonuses for managers
    calculateAnnualSalary() {
        return super.calculateAnnualSalary() + this.calculateBonus();
    }
}
// Test case
const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
console.log(mgr1.getDetails()); // Expected output: "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"
console.log(mgr1.calculateBonus()); // Expected output: 9600


// Task 3: Creating a Company Class
class Company { 
    // Creating a company class with a property name and an array employees
    constructor(name) {
        this.name = name;
        this.employees = [];
    }
    // Adding a method that adds an employee to the array
    addEmployee(employee) {
        this.employees.push(employee);
    }
    // Adding a method that logs all employees’ details.
    listEmployees() {
        this.employees.forEach(employee => {
          console.log(employee.getDetails());
        });
    }
    // Task 4: Adding a method that returns the sum of all employee salaries (including managers)
    calculateTotalPayroll() {
        return this.employees.reduce((total, employee) => total + employee.calculateAnnualSalary(), 0); 
    }
    // Task 5: Adding a method to convert an Employee into a Manager while retaining their original details
    promoteToManager(employee, teamSize) {
        const index = this.employees.indexOf(employee); 
        if (index !== -1) 
        this.employees[index] = new Manager(employee.name, employee.id, employee.department, employee.salary, teamSize);
    }
}
// Test Cases 
const company = new Company("TechCorp");
company.addEmployee(emp1);
company.addEmployee(mgr1);
company.listEmployees();
// Expected output:
// "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"
// "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"


// Task 4: Implementing a Payroll System
// Changes made in Manager and Company class
// Test case
console.log(company.calculateTotalPayroll()); // Expected output: 165600 (assuming emp1 and mgr1 salaries)


// Task 5: Implementing Promotions
// Changes made in Company class
// Test case
company.promoteToManager(emp1, 3);
company.listEmployees(); // Expected output: "Manager: Alice Johnson, ID: 101, Department: Sales, Salary: $5000, Team Size: 3"

