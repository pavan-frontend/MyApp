import { Component } from '@angular/core';
import { VehiclesService } from '../vehicles.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {
  // variables start
   public vehicles: any = [];  //get

  public term: string = "";     

  public column: string = "";  
  public order: string = "";

  public page: any = [];
  public limit: any = [];

  //  variables End

  constructor(private _vehiclesService: VehiclesService) {
    _vehiclesService.getVehicles().subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert("Internal server Error")
      }
    )
  }
  // custom  Filter method  from api

  getFilteredVehicles() {
    this._vehiclesService.getfilteredvehicles(this.term).subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert("Internal server error");
      }
    )
  }

  // custom sort method from api
  getsortedVehicles() {
    this._vehiclesService.getSortedVehicles(this.column, this.order).subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert("Internal server error")
      }
    )
  }
  // pagination function
  getpagedVehicles() {
    this._vehiclesService.getPageVehicles(this.limit, this.page).subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert("Internal server error")
      }
    )
  }



  // delete functiom from apis

  deleteVehicle(id:any) {
    this._vehiclesService.deleteVehicles(id).subscribe(
      (data: any) => {
        alert("deleted succesfully");
        location.reload();
      },
      (err:any) => {
        alert("Internal server error")
      }
    )
  }

}

