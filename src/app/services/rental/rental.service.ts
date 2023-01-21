import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Rent } from 'src/app/models/rental/rent';
import { Rental } from 'src/app/models/rental/rental';
import { ResponseModel } from 'src/app/models/responseModel';


@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl = "https://localhost:44379/api/Rentals/GetRentalDetails"

  constructor(private httpClient: HttpClient) { }

  getRentalDetail():Observable<ListResponseModel<Rental>>{
    return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl)
  }




  addRental(rent:any):Observable<ResponseModel>{
    let newApiUrl = "https://localhost:44379/api/Rentals/AddRental"

    // const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(rent);
    return this.httpClient.post<ResponseModel>(newApiUrl,  body)
    // return this.httpClient.post<ResponseModel>(newApiUrl,  body,{'headers':headers})

  }

  
}
