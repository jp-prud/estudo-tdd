type User = {
  name: string;
  role: Roles;
  salary: number;
  discountedSalary: number;
};

const HIGHEST_DEVELOPER_SALARY = 3000;
const HIGHEST_ADMIN_SALARY = 5000;
const HIGHEST_DBA_SALARY = 2000;

type Roles = 'developer' | 'admin' | 'dba';

export default class Calc {
  user: User;
  total: number = 0;

  exec(input: User): boolean {
    if (!input.name) throw new Error('Name is required');
    if (!input.role) throw new Error('Role is required');
    if (
      input.role !== 'developer' &&
      input.role !== 'admin' &&
      input.role !== 'dba'
    )
      throw new Error('This Role is invalid');
    if (input.salary < 0 || typeof input.salary !== 'number')
      throw new Error('Salary is invalid');

    this.user = input;

    return true;
  }

  getTotal(): number {
    if (this.user.role === 'developer') {
      this.user.discountedSalary =
        this.user.salary >= HIGHEST_DEVELOPER_SALARY
          ? this.calculatedDiscount(0.2)
          : this.calculatedDiscount(0.1);
    }

    if (this.user.role === 'admin') {
      this.user.discountedSalary =
        this.user.salary >= HIGHEST_ADMIN_SALARY
          ? this.calculatedDiscount(0.3)
          : this.calculatedDiscount(0.2);
    }

    if (this.user.role === 'dba') {
      this.user.discountedSalary =
        this.user.salary >= HIGHEST_DBA_SALARY
          ? this.calculatedDiscount(0.25)
          : this.calculatedDiscount(0.15);
    }

    return this.user.discountedSalary;
  }

  calculatedDiscount(multiplicative: number) {
    return this.user.salary - this.user.salary * multiplicative;
  }
}
