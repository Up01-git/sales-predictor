import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  constructor(private http: HttpClient) { 

  }

  

  sendData(date: any) {
    const api = 'http://localhost:5000/predict?date=' + date;
    return this.http.get(api).pipe(map(data => {return data}));
  }
  
  

}
