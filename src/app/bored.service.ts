import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoredService {

  constructor(private _httpClient: HttpClient) { }
  getbored(): Observable<any> {
    return this._httpClient.get("https://www.boredapi.com/api/activity")
  }
}
