import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import{Employee} from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  addEmployee(formData: any) {
    throw new Error('Method not implemented.');
  }
  getDepartments() {
    throw new Error('Method not implemented.');
  }
  getProjects() {
    throw new Error('Method not implemented.');
  }
  private restUrl='http://localhost:1102/Employee';
  constructor(private httpClient:HttpClient) {}
  getEmployees():Observable<Employee[]>
  {
    return this.httpClient.get<Employee[]>(`${this.restUrl}/getallemployees`,{responseType:'json'});

  }

  saveEmployee(employee:Employee):Observable<Object>
  {
    return this.httpClient.post(`${this.restUrl}/insertemployee`,employee,{responseType:"text"});
  }

  updateEmployee(employee:Employee):Observable<Object>
  {
    return this.httpClient.put(`${this.restUrl}/updateemployee`,employee,{responseType:"text"});
  }

  deleteEmployee(employeeId:number):Observable<Object>
  {
    return this.httpClient.delete(`${this.restUrl}/deleteemployee/${employeeId}`,{responseType:"text"});
  }

  getempbyid(employeeId:number):Observable<Object>
  {
    return this.httpClient.get(`${this.restUrl}/getemployeebyid/${employeeId}`,{responseType:"text"});
  }

  getempbyname(employeeName:String):Observable<Object>
  {
    return this.httpClient.get(`${this.restUrl}/getemployeebyname/${employeeName}`,{responseType:"text"});
  }
  getempbyemail(email:String):Observable<Object>
  {
    return this.httpClient.get(`${this.restUrl}/getemployeebyemail/${email}`,{responseType:"text"});
  }

  getempbyage(age:number):Observable<Object>
  {
    return this.httpClient.get(`${this.restUrl}/getemployeebyage/${age}`,{responseType:"text"});
  }

  getempbyphone(phoneNumber:number):Observable<Object>
  {
    return this.httpClient.get(`${this.restUrl}/getemployeebyPhonenumber/${phoneNumber}`,{responseType:"text"});
  }

  getempbyjobtitle(jobTitle:String):Observable<Object>
  {
    return this.httpClient.get(`${this.restUrl}/getemployeebyjobtitile/${jobTitle}`,{responseType:"text"});
  }

  getempbyhiredate(hireDate:String):Observable<Object>
  {
    return this.httpClient.get(`${this.restUrl}/getemployeebyhiredate/${hireDate}`,{responseType:"text"});
  }

  getempbysalary(salary:Number):Observable<Object>
  {
    return this.httpClient.get(`${this.restUrl}/getemployeebysalary/${salary}`,{responseType:"text"});
  }


  


}
