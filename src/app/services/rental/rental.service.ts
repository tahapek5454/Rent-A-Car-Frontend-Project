import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Rent } from 'src/app/models/rental/rent';
import { Rental } from 'src/app/models/rental/rental';


@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl = "https://localhost:44379/api/Rentals/GetRentalDetails"

  constructor(private httpClient: HttpClient) { }

  getRentalDetail():Observable<ListResponseModel<Rental>>{
    return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl)
  }

  
}
