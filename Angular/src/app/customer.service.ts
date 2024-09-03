import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, timeout } from 'rxjs';
import { Customer } from './customer';
import { CustomerAuthService } from './_service/customer-auth.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient:HttpClient,
              private customerauthservice:CustomerAuthService) { }

  requestHeader = new HttpHeaders(
    {"No-Auth":"True"}
  );

  private BASE_URL="http://localhost:8080/customer";
  private LOGIN_URL="http://localhost:8080";


  login(username:string,password:string){
    return this.httpClient.post(this.LOGIN_URL+"/user/login",{username,password},{headers:this.requestHeader})
 }

 public roleMatch(allowedRoles:any):any{
  let isMatch=false;
  const userRoles:any=this.customerauthservice.getRoles();

  if(userRoles != null && userRoles){
    for(let i=0;i<userRoles.length;i++){
      for(let j=0;j<allowedRoles.length;j++){
        if(userRoles[i].roleName === allowedRoles[j]){
        isMatch=true;
        return isMatch;
      }else{
        return isMatch;
      }
    }
  }
}
}
  

  getAllCustomers():Observable<Customer[]>{
   return this.httpClient.get<Customer[]>(`${this.BASE_URL}`);
  }

  saveCustomer(customer:Customer):Observable<Customer>{
    return this.httpClient.post<Customer>(`${this.BASE_URL}/save`,customer);
  }

  delete(id:number):Observable<string>{
    return this.httpClient.delete<string>(`${this.BASE_URL}/delete/${id}`);
  }

  getById(id:number):Observable<Customer>{
    return this.httpClient.get<Customer>(`${this.BASE_URL}/getById/${id}`);
  }

  update(customer:Customer):Observable<string>{
    return this.httpClient.put<string>(`${this.BASE_URL}/update`,customer);
  }

  getByFirstName(firstName:string):Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(`${this.BASE_URL}/getByFirstName/${firstName}`);
  }

  getByLastName(lastName:string):Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(`${this.BASE_URL}/getByLastName/${lastName}`);
  }

  getByLessThanAge(age:number):Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(`${this.BASE_URL}/getByLessthanAge/${age}`);
  }

  getByGreaterThanAge(age:number):Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(`${this.BASE_URL}/getByGreaterthanAge/${age}`);
  }

  getByAge(age:number):Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(`${this.BASE_URL}/getByAge/${age}`);
  }

  getByEmail(email:string):Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(`${this.BASE_URL}/getByEmail/${email}`);
  }

  updateFirstName(id:number,firstName:string):Observable<string>{
    const req={firstName};
    return this.httpClient.put<string>(`${this.BASE_URL}/updateFirstName/${id}`,req);
  }

  updateLastName(id:number,lastName:string):Observable<string>{
    const req={lastName};
    return this.httpClient.put<string>(`${this.BASE_URL}/updateLastName/${id}`,req);
  }

  updateEmail(id:number,email:string):Observable<string>{
    const req={email};
    return this.httpClient.put<string>(`${this.BASE_URL}/updateEmail/${id}`,req);
  }

  updateMobile(id:number,mobile:string):Observable<string>{
    const req={mobile};
    return this.httpClient.put<string>(`${this.BASE_URL}/updateMobile/${id}`,req);
  }

  updateAge(id:number,age:number):Observable<string>{
    const req={age};
    return this.httpClient.put<string>(`${this.BASE_URL}/updateAge/${id}`,req);
  }

  getAllFirstName():Observable<string[]>{
   
    return this.httpClient.get<string[]>(`${this.BASE_URL}/getAllCustomersFirstName`);
  }
}
