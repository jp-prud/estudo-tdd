import Calc from './calc';

describe('salary calc', () => {
  let calc;

  beforeEach(() => {
    calc = new Calc();
  });

  it('should create employee when input is informed', () => {
    const employee = {
      name: 'any_name',
      role: 'developer',
      salary: 5000,
    };

    expect(calc.exec(employee)).toBeTruthy();
  });

  it('should exemption when input is invalid (Empty Name)', () => {
    const employee = {
      name: undefined,
      role: 'developer',
      salary: 5000,
    };

    expect(() => {
      calc.exec(employee);
    }).toThrowError();
  });

  it('should exemption when input is invalid (Empty Role)', () => {
    const employee = {
      name: 'any_name',
      role: undefined,
      salary: 5000,
    };

    expect(() => {
      calc.exec(employee);
    }).toThrowError();
  });

  it('should exemption when input is invalid (Role is not defined in list)', () => {
    const employee = {
      name: 'any_name',
      role: 'any_role',
      salary: 5000,
    };

    expect(() => {
      calc.exec(employee);
    }).toThrowError();
  });

  it('should exemption when salary is lower than 0 or NaN', () => {
    const employee = {
      name: 'any_name',
      role: 'developer',
      salary: -1,
    };

    const employee2 = {
      name: 'any_name',
      role: 'developer',
      salary: -1,
    };

    expect(() => {
      calc.exec(employee);
    }).toThrowError();

    expect(() => {
      calc.exec(employee2);
    }).toThrowError();
  });

  it('should return discounted salary when developer called is getTotal() ', () => {
    const employee = {
      name: 'any_name',
      role: 'developer',
      salary: 5000,
    };

    const employee2 = {
      name: 'any_name',
      role: 'developer',
      salary: 2000,
    };

    expect(calc.exec(employee)).toBeTruthy();
    expect(calc.getTotal()).toEqual(4000);

    expect(calc.exec(employee2)).toBeTruthy();
    expect(calc.getTotal()).toEqual(1800);
  });

  it('should return discounted salary when admin called is getTotal() ', () => {
    const employee = {
      name: 'any_name',
      role: 'admin',
      salary: 5000,
    };

    const employee2 = {
      name: 'any_name',
      role: 'admin',
      salary: 2500,
    };

    expect(calc.exec(employee)).toBeTruthy();
    expect(calc.getTotal()).toEqual(3500);

    expect(calc.exec(employee2)).toBeTruthy();
    expect(calc.getTotal()).toEqual(2000);
  });

  it('should return discounted salary when dba called is getTotal() ', () => {
    const employee = {
      name: 'any_name',
      role: 'dba',
      salary: 550,
    };

    expect(calc.exec(employee)).toBeTruthy();
    expect(calc.getTotal()).toEqual(467.5);
  });
});
