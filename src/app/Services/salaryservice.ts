import { Service } from '@angular/core';

@Service()
export class Salaryservice {
  calculateSalary(base: number, bonus: number) {
    return base + bonus;
  }
}
