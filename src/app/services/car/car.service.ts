import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CarResponseModel } from '../../models/car/carResponseModel';
import { Observable } from 'rxjs';
import { CarDetailResponseModel } from 'src/app/models/car/carDetailResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = "https://localhost:44379/api/Cars/"



  constructor(private httpClient: HttpClient) { }

  // subscribe olunabilir bir metod 
  getCars(label:string):Observable<CarResponseModel> {
    return this.httpClient.get<CarResponseModel>(this.apiUrl+label)
  }

  getCarDetails(label:string):Observable<CarDetailResponseModel>{
    return this.httpClient.get<CarDetailResponseModel>(this.apiUrl+label)
  }
}
