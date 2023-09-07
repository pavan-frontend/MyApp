import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DirectivesComponent } from './directives/directives.component';
import { TableComponent } from './table/table.component';
import { PipesComponent } from './pipes/pipes.component';
import { GradesComponent } from './grades/grades.component';
import { RandomnumberComponent } from './randomnumber/randomnumber.component';
import { BankComponent } from './bank/bank.component';
import { PricePipe } from './price.pipe';
import { AgePipe } from './age.pipe';
import { ImpDirective } from './imp.directive';
import {HttpClientModule} from '@angular/common/http';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PageNotFoundComponent,
    HomeComponent,
    AboutComponent,
    DataBindingComponent,
    CalculatorComponent,
    RectangleComponent,
    BmiComponent,
    DirectivesComponent,
    TableComponent,
    PipesComponent,
    GradesComponent,
    RandomnumberComponent,
    BankComponent,
    PricePipe,
    AgePipe,
    ImpDirective,
    UsersComponent,
    VehiclesComponent,
    AccountlistComponent,
    FlipkartComponent,
    EmailComponent,
    BoredComponent,
    GalleryComponent,
    DahlComponent,
    CreatevehicleComponent,
    CreateuserComponent,
    CreateaccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
