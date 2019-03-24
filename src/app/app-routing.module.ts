import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CliComponent } from './cli/cli.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  
  {
    path: 'login',
    component: LoginComponent
  } ,
  {
    path: 'cliente',
    component: CliComponent
  } ,
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
