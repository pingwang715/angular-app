import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule, CommonModule],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  token: string = '';
  data: any;
  constructor(private http: HttpClient) {}
  getData() {
    this.http.get('https://fakestoreapi.com/products').subscribe((res) => {
      this.data = res;
    })
  }
}
