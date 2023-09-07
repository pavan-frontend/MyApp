import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor(private _httpClient: HttpClient) { }

  // getvehicles data

  getVehicles(): Observable<any> {
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction")
  }

  // Filtered vehicles method
  getfilteredvehicles(term: any): Observable<any> {
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?filter=" + term);
  }

  // Sort vehicles

  getSortedVehicles(column: any, order: any) {

    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?sortBy=" + column + "&order=" + order)
  }

  // pagination for apis

  getPageVehicles(limit:any,page:any){
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit="+limit+"&page="+page)

  }

  // delete method from api

  deleteVehicles(id:any): Observable<any> {
    return this._httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id);

  }

  // post method

  createVehicle(data:any):Observable<any>{
    return this._httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction",data);
  }

}
