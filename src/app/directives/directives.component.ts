import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  public time:number = 0;
  
  public ages:number[] = [10,20,30,40,50];

  public states:string[] =['Telangana','Andhra Pradesh', 'Karnataka', 'Tamilanadu'];

  public users:any = [
    {name:'pavan',age:3,phone:98758477,marks:90},
    {name:'sree',age:13,phone:98775547,marks:34},
    {name:'bharath',age:14,phone:768687,marks:36},
    {name:"sujeeth",age:25,phone:78898,marks:34}
  ]

  public term:string = "";
  filter(){
    this.users = this.users.filter((value:any)=>value.name.includes(this.term))
    
  }
  ageHightoLow(){
    this.users = this.users.sort((a:any,b:any)=>b.age-a.age)
  }
  ageLowToHigh(){
    this.users = this.users.sort((a:any,b:any)=>a.age-b.age)
  }
  increaseByone(){
    this.users = this.users.map((value:any)=>{
      value.age = value.age+1;
      return value;
    })
  }

  total(){
    let total = this.users.reduce((sum:any,a:any)=>sum+a.age,0);
    alert(total);
  }

  // delete

  delete(i:any){
    this.users.splice(i,1);
  }

  
  
}

