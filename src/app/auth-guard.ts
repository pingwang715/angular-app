import { inject, Injectable } from '@angular/core';
import { CanActivateFn, CanActivate, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');

  if (token) {
    return true;
  }
  router.navigate(['/login']);
  return false;

};

// @Injectable({providedIn: 'root'})
// export class AuthGuard implements CanActivate {
//   constructor(private router: Router){}

//   canActivate(): boolean{
//     const token = localStorage.getItem('token');

//     if (token) {
//       return true;
//     }
//     this.router.navigate(['/login']);
//     return false;

//   }
// }
