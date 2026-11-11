import { Routes } from '@angular/router';
import { Home } from './Components/home/home';
import { About } from './Components/about/about';
import { JwtComponent } from './Components/jwt-component/jwt-component';
import { authGuard } from './auth-guard';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: JwtComponent},
  { path: 'home', component: Home, canActivate:[authGuard]},
];
