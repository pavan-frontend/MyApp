import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessegeService {

  constructor(private _httpClient:HttpClient) { }
  getmesseges():Observable<any>{
    return this._httpClient.get("https://randomuser.me/api/?results=20&inc=name,picture,id,cell&nat=in")
  }
}
