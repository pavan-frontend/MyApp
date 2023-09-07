import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountlistService {

  constructor(private _httpClient: HttpClient) { }
  getaccountlist(): Observable<any> {
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals")
  }

  // filter method

  getfilteredaccountlist(term:any):Observable<any> {
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter="+term);
  }

  //sortBy method

  getSortedaccountlist(column:any,order:any){
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?sortBy="+column+"&order="+order)

  }

  // pagination service

  getPageAccountlist(limit:any,page:any){
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?limit="+limit+"&page="+page);

  }

  // delete api

  deleteaccountlist(id:any) {
  return this._httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/"+id)
    
  }

  // post method

  createaccount(data:any):Observable<any>{
    return this._httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/principals",data)

  }
 
}
