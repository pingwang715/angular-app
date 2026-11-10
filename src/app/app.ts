import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MyComponent } from './Components/my-component/my-component';
import { NewComponent } from './Components/new-component/new-component';
import { Employee } from './Services/employee/employee';
import { FormComponent } from './Components/form-component/form-component';
import { JwtComponent } from './Components/jwt-component/jwt-component';

@Component({
  imports: [RouterOutlet, MyComponent, NewComponent, Employee, RouterLink, RouterLinkActive, FormComponent, JwtComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('my-first-app');

  parentMessage = 'Hello Child';

  message = '';
  receive(data: string) {
    this.message = data;
  }
}
