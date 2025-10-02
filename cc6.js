class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  describe() {
    return `${this.name} works in ${this.department}`;
  }
}

//Employee Subclass
class Manager extends Employee {
  constructor(name, department, teamSize) {
    super(name, department);
    this.teamSize = teamSize;
  }

  describe() {
    return `${this.name} manages a team of ${this.teamSize} in ${this.department}`;
  }
}

//Sample Staff
  let emp1 = new Employee("John", "Mathematics");
  let emp2 = new Employee("Pete", "English");

  let man1 = new Manager("Kenya", "Mathematics", 30);
  let man2 = new Manager("Zara", "English", 15);

//New class - step 5
class Company {
  constructor() {
    this.employee = [];
}

  addEmployee(employee) {
    this.employee.push(employee);
  }
  listEmployees() {
    this.employee.forEach(emp => console.log(emp.describe()));
  }
}

//Step 6
const company = new Company();
company.addEmployee(emp1);
company.addEmployee(emp2);
company.addEmployee(man1);
company.addEmployee(man2);

company.listEmployees();

