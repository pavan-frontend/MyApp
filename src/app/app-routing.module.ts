import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DirectivesComponent } from './directives/directives.component';
import { TableComponent } from './table/table.component';
import { PipesComponent } from './pipes/pipes.component';
import { GradesComponent } from './grades/grades.component';
import { RandomnumberComponent } from './randomnumber/randomnumber.component';
import { BankComponent } from './bank/bank.component';
import { UsersComponent } from './users/users.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { AccountlistComponent } from './accountlist/accountlist.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { EmailComponent } from './email/email.component';
import { BoredComponent } from './bored/bored.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DahlComponent } from './dahl/dahl.component';
import { CreatevehicleComponent } from './createvehicle/createvehicle.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { authenticationGuard } from './authentication.guard';
import { notifyGuard } from './notify.guard';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent, canActivate:[authenticationGuard], children:[
    {path:"home",component:HomeComponent},
    {path:"about",component:AboutComponent},
    {path:"data-binding",component:DataBindingComponent},
    {path:"calculator",component:CalculatorComponent},
    {path:"rectangle",component:RectangleComponent},
    {path:"bmi",component:BmiComponent},
    {path:"directives",component:DirectivesComponent},
    {path:"table",component:TableComponent},
    {path:"pipes",component:PipesComponent},
    {path:"grades",component:GradesComponent},
    {path:"randomnumber",component:RandomnumberComponent},
    {path:"bank",component:BankComponent},
    {path:"users",component:UsersComponent},
    {path:"vehicles",component:VehiclesComponent},
    {path:"accountlist",component:AccountlistComponent},
    {path:"flipkart",component:FlipkartComponent},
    {path:"email",component:EmailComponent},
    {path:"bored",component:BoredComponent},
    {path:"gallery",component:GalleryComponent},
    {path:"dahl", component:DahlComponent},
    {path:"createvehicle", component:CreatevehicleComponent, canDeactivate:[notifyGuard]},
    {path:"createuser",component:CreateuserComponent, canDeactivate:[notifyGuard]},
    {path:"createaccount", component:CreateaccountComponent, canDeactivate:[notifyGuard]}
  
  ]},
  {path:'', component:LoginComponent},
  {path:'**', component:PageNotFoundComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }