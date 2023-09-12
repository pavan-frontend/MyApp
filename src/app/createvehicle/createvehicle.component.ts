import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehiclesService } from '../vehicles.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-createvehicle',
  templateUrl: './createvehicle.component.html',
  styleUrls: ['./createvehicle.component.css']
})
export class CreatevehicleComponent {

  public id: any = [];
  public vehicleForm: FormGroup = new FormGroup({
    Vehicle: new FormControl(),
    manufacturer: new FormControl(),
    model: new FormControl(),
    type: new FormControl(),
    fuel: new FormControl(),
    color: new FormControl()
  });
  constructor(private _vehiclesService: VehiclesService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(
      (data: any) => {
        this.id = data.id;

        this._vehiclesService.getVehiclesDetails(this.id).subscribe(
          (data: any) => {
            this.vehicleForm.patchValue(data);
          }
        )
      }
    )
  }


  submit() {
    if (this.id) {
      // Edit
      console.log(this.vehicleForm);
      this._vehiclesService.updatevehicles(this.id,this.vehicleForm.value).subscribe(
        (data: any) => {
          alert("Vehicle Upadated successfully");
        },
        (err: any) => {
          alert("vehicle Updation Failed failed");
        }
      )
    } else {
      // Create
      this._vehiclesService.createVehicle(this.vehicleForm.value).subscribe(
        (data: any) => {
          alert("Vehicle created successfully");
        },
        (err: any) => {
          alert("vehicle creation failed");
        }
      )
    }
  }

}





