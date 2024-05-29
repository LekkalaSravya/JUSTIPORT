import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  apiUrl="http://localhost:7000/lawdet";
  cUrl="http://localhost:7000/lawdet";

  getAllUser():Observable<any>{
       return this.http.get(`${this.apiUrl}`);
  }
  createData(data:any):Observable<any>{
    console.log(data,'Data Created');
    return this.http.post(`${this.cUrl}`,data);
  }
  deleteData(id:any):Observable<any>{
    let ids=id;
    return this.http.delete(`${this.cUrl}/${ids}`);
  }
  updateData(data:any,id:any):Observable<any>{
    let ids=id;
    return this.http.put(`${this.cUrl}/${ids}`,data);
  }
  getIdData(id:any):Observable<any>{
    let ids=id;
    return this.http.get(`${this.apiUrl}/${ids}`);
  }
  getSingleData(id:any):Observable<any>{
    let ids=id;
    return this.http.get(`${this.cUrl}/${ids}`);

  }
}
