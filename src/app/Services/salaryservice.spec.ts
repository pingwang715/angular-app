import { TestBed } from '@angular/core/testing';
import { Salaryservice } from './salaryservice';

describe('Salaryservice', () => {
  let service: Salaryservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Salaryservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
