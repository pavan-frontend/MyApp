import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutceoComponent } from './aboutceo/aboutceo.component';
import { AboutCompanyComponent } from './about-company/about-company.component';



@NgModule({
  declarations: [
    AboutceoComponent,
    AboutCompanyComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AboutCompanyComponent,
    AboutceoComponent
  ]
})
export class ModuleModule { }
