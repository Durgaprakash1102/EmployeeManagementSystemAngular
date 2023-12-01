import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department } from './department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private restUrl='http://localhost:1102/Department';
  constructor(private httpClient:HttpClient) {}
  getDepartments():Observable<Department[]>
  {
    return this.httpClient.get<Department[]>(`${this.restUrl}/getalldepartments`,{responseType:'json'});

  }

  saveDepartment(department:Department):Observable<Object>
  {
    return this.httpClient.post(`${this.restUrl}/insertdepartment`,department,{responseType:"text"});
  }

  updateDepartment(department:Department):Observable<Object>
  {
    return this.httpClient.put(`${this.restUrl}/updatedepartment`,department,{responseType:"text"});
  }

  deleteDepartment(departmentId:number):Observable<Object>
  {
    return this.httpClient.delete(`${this.restUrl}/deletedepartment/${departmentId}`,{responseType:"text"});
  }
  getdeptbyid(departmentId:number):Observable<Object>
  {
    return this.httpClient.get(`${this.restUrl}/getdepartmentbyid/${departmentId}`,{responseType:"text"});
  }
  getdeptbyname(departmentName:String):Observable<Object>
  {
    return this.httpClient.get(`${this.restUrl}/getdepartmentbyname/${departmentName}`,{responseType:"text"});
  }
  getdeptbylocation(location:String):Observable<Object>
  {
    return this.httpClient.get(`${this.restUrl}/getdepartmentbylocation/${location}`,{responseType:"text"});
  }

}
