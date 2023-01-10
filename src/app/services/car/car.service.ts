import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CarResponseModel } from '../../models/car/carResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = "https://localhost:44379/api/Cars/getAllCar"



  constructor(private httpClient: HttpClient) { }

  // subscribe olunabilir bir metod 
  getCars():Observable<CarResponseModel> {
    return this.httpClient.get<CarResponseModel>(this.apiUrl)
  }
}
