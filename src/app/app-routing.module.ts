import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjoutFacComponent } from './components/ajout-fac/ajout-fac.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { ListeFacAfficheComponent } from './components/liste-fac-affiche/liste-fac-affiche.component';
import { ListeFacComponent } from './components/liste-fac/liste-fac.component';
import { LoginComponent } from './components/login/login.component';
import { Page404Component } from './components/page404/page404.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate:[AuthGuard]
  },


  {
    path: "gestionUniversite",
    component: ListeFacComponent
  },
  {
    path: "universites",
    component: ListeFacAfficheComponent
  },
  {
    path: "ajout",
    component: AjoutFacComponent
  },


  //404
  {
    path: "**",
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
