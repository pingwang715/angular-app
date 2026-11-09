import { Component, OnInit } from '@angular/core';
import { ObservableService } from '../../Services/observable-service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  imports: [CommonModule],
  selector: 'app-new-component',
  styleUrl: './new-component.css',
  templateUrl: './new-component.html',
})
export class NewComponent implements OnInit {

  users$: any;
  subscription!: Subscription;
  constructor(private service: ObservableService) {}

  ngOnInit(): void {
    this.subscription = this.service.getUsers().subscribe();
    this.users$ = this.service.getUsers();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
