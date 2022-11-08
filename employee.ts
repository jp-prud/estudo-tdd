type User = {
  name: string;
  email: string;
  salary: number;
  role: string;
};

export default class Employee {
  name: string;
  email: string;
  salary: number;
  role: string;

  constructor(input: User) {
    this.name = input.name;
    this.email = input.email;
    this.salary = input.salary;
    this.role = input.role;
  }

  getName(): string {
    return this.name;
  }

  getRole(): string {
    return this.role;
  }

  calculateSalary(): number {
    return 5000;
  }
}
