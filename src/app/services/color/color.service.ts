import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorResponseModel } from 'src/app/models/color/colorResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl = "https://localhost:44379/api/Colors/getAllColors"
  constructor(private httClient:HttpClient) { }

  getColors():Observable<ColorResponseModel>{
    return this.httClient.get<ColorResponseModel>(this.apiUrl)
  }
}
