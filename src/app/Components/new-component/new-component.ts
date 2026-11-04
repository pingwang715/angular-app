import { Component, OnInit } from '@angular/core';
import { ObservableService } from '../../Services/observable-service';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-new-component',
  styleUrl: './new-component.css',
  templateUrl: './new-component.html',
})
export class NewComponent implements OnInit {

  users: any[] = [];
  constructor(private service: ObservableService) {}

  ngOnInit(): void {
    this.service.getUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
    });
  }
}
