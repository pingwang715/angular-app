import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../Services/auth-service';
import { Router } from '@angular/router';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-jwt-component',
  styleUrl: './jwt-component.css',
  templateUrl: './jwt-component.html',
})
export class JwtComponent {
  username = '';
  password = '';

  constructor(
    public auth: AuthService,
    private router: Router,
  ) {}

  onLogin() {
    this.auth.login(this.username, this.password).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }
}
