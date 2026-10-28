import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-my-component',
  styleUrl: './my-component.css',
  templateUrl: './my-component.html',
})
export class MyComponent {
  appName = 'Good afternoon';
  imageUrl= 'https://plus.unsplash.com/premium_photo-1677545182067-26ac518ef64f?q=80&w=1556&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D';
  showMessage() {
    alert('Button Clicked');
  };
  food: string = 'eg. ';

  isMessageShwon = true;
  toggleMessage() {
    this.isMessageShwon = !this.isMessageShwon;
  }

  languages = ['Java', 'C++', 'Python', 'Ruby', 'ABAP'];
}
