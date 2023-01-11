import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { CarDetail } from 'src/app/models/car/carDetail';
import { Car } from 'src/app/models/car/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = "https://localhost:44379/api/"



  constructor(private httpClient: HttpClient) { }

  // subscribe olunabilir bir metod 
  getCars():Observable<ListResponseModel<Car>> {
    let newApiUrl = this.apiUrl + "Cars/getAllCar"
    return this.httpClient.get<ListResponseModel<Car>>(newApiUrl)
  }

  getCarDetails():Observable<ListResponseModel<CarDetail>>{
    let newApiUrl = this.apiUrl + "Cars/getCarDetails"

    return this.httpClient.get<ListResponseModel<CarDetail>>(newApiUrl)
  }

  getCarsByBrandId(brandId:number):Observable<ListResponseModel<Car>>{
    let newApiUrl = this.apiUrl + "Cars/GetCarsByBrandId?id="+brandId
    return this.httpClient.get<ListResponseModel<Car>>(newApiUrl)
  }

}
