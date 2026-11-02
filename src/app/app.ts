import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyComponent } from './Components/my-component/my-component';
import { NewComponent } from './Components/new-component/new-component/new-component';

@Component({
  imports: [RouterOutlet, MyComponent, NewComponent],
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
