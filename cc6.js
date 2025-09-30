class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  describe() {
    return `${this.name} works in ${this.department}`;
  }
}

class Manager extends Employee {
  constructor(name, department, teamSize) {
    super(name, department);
    this.teamSize = teamSize;
  }

  describe() {
    return `${this.name} manages a team of ${this.teamSize} in ${this.department}`;
  }
}

const emp1 = new Employee("John", "Mathematics");
console.log(emp1.describe());
const emp2 = new Employee("Pete", "English");
console.log(emp2.describe());
const man1 = new Manager("Kenya", "Mathematics", 50);
console.log(man1.describe());
const man2 = new Manager("Zara", "English", 34);
console.log(man2.describe());