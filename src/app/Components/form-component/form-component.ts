import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  selector: 'app-form-component',
  styleUrl: './form-component.css',
  templateUrl: './form-component.html',
})
export class FormComponent {
  usernameForm = new FormGroup({
    username: new FormControl('', [Validators.minLength(3)]),
  });

  get username() {
    return this.usernameForm.get('username');
  }
}
