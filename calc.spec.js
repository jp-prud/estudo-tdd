import Employee from './employee';

describe('salary calc', () => {
  it('should create a new dev', () => {
    const newDev = new Employee({
      name: 'John',
      email: 'John@example.com',
      salary: 10000,
      role: 'develop',
    });

    expect(newDev.getRole()).toEqual('develop');
  });

  it('should calculate salary to dev', () => {
    const newDev = new Employee({
      name: 'John',
      email: 'John@example.com',
      salary: 10000,
      role: 'develop',
    });

    expect(newDev.calculateSalary()).toBe(5000)
  });
});
