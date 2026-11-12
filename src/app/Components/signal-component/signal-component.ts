import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-signal-component',
  styleUrl: './signal-component.css',
  templateUrl: './signal-component.html',
})
export class SignalComponent {
  count = signal(0);

  increment() {
    this.count.set(this.count() + 1);
  }
}
