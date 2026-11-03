import { Component } from '@angular/core';
import { Salaryservice } from '../salaryservice';

@Component({
  imports: [],
  selector: 'app-employee',
  styleUrl: './employee.css',
  templateUrl: './employee.html',
})
export class Employee {
  base = 2000;
  bonus = 500;
  finalSalary = 0;

  constructor(private salaryService: Salaryservice) {
    this.finalSalary = this.salaryService.calculateSalary(this.base, this.bonus);
  }
}
