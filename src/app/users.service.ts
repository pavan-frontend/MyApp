import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _httpClient:HttpClient) { }

  getUsers():Observable<any>{
   return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student");
  }

  // Filtered vehicles

  getfilteredusers(term:any):Observable<any> {
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter="+term)
  }

  // Sort users
  getSortedUsers(column:any, order:any){

    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?sortBy="+column+"&order="+order)

  }

  // post users
  createusers(data:any):Observable<any>{
    return this._httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/student",data)
  }
}
