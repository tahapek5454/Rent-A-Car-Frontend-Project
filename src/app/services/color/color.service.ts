import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from 'src/app/models/color/color';
import { ListResponseModel } from 'src/app/models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl = "https://localhost:44379/api/Colors/getAllColors"
  constructor(private httClient:HttpClient) { }

  getColors():Observable<ListResponseModel<Color>>{
    return this.httClient.get<ListResponseModel<Color>>(this.apiUrl)
  }
}
