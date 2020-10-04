import { NgModule } from '@angular/core';
import { Routes, CanActivate , RouterModule } from '@angular/router';
import {DashboardComponent} from '../app/dashboard/dashboard.component';
import {LoginComponent} from '../app/login/login.component';
import {SignupComponent} from '../app/signup/signup.component';
import {ContactComponent} from '../app/contact/contact.component';
import {IndexComponent} from '../app/index/index.component';
const routes: Routes = [
  {path: 'signup', component: SignupComponent},
  {path: 'index', component: IndexComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/index', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

