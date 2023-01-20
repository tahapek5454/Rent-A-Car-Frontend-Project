import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from 'src/app/models/auth/loginModel';
import { TokenModel } from 'src/app/models/auth/tokenModel';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = "https://localhost:44379/api/auth"

  constructor(private httpClient:HttpClient) { }

  login(loginModel:LoginModel):Observable<SingleResponseModel<TokenModel>>{
    let newApiUrl = this.apiUrl+"/login"
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(loginModel);

    return this.httpClient.post<SingleResponseModel<TokenModel>>(newApiUrl, body,{'headers':headers})

  }

  isAuthanticated(){
    if(localStorage.getItem("token")) return true

    return false
  }


}
