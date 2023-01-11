import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from 'src/app/models/brand/brand';
import { ListResponseModel } from 'src/app/models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl = "https://localhost:44379/api/Brands/getAllBrands"

  constructor(private httClient:HttpClient) { }

  getBrands():Observable<ListResponseModel<Brand>>{
    return this.httClient.get<ListResponseModel<Brand>>(this.apiUrl)
  }
}
