import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DahlService {

  constructor(private _httpClient: HttpClient) { }

  getdahl(): Observable<any> {
    return this._httpClient.get("https://s3.amazonaws.com/api-fun/books.json")
  }
}
