import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private restUrl='http://localhost:1102/Project';
  constructor(private httpClient:HttpClient) {}
  getProjects():Observable<Project[]>
  {
    return this.httpClient.get<Project[]>(`${this.restUrl}/getallprojects`,{responseType:'json'});

  }

  saveproject(project:Project):Observable<Object>
  {
    return this.httpClient.post(`${this.restUrl}/insertproject`,project,{responseType:"text"});
  }

  updateproject(project:Project):Observable<Object>
  {
    return this.httpClient.put(`${this.restUrl}/updateproject`,project,{responseType:"text"});
  }

  deleteproject(projectId:number):Observable<Object>
  {
    return this.httpClient.delete(`${this.restUrl}/deleteproject/${projectId}`,{responseType:"text"});
  }

  getprojectbyid(projectId:number):Observable<Object>
  {
    return this.httpClient.get(`${this.restUrl}/getprojectbyid/${projectId}`,{responseType:"text"});
  }
  getprojectbyname(projectName:String):Observable<Object>
  {
    return this.httpClient.get(`${this.restUrl}/getprojectbyname/${projectName}`,{responseType:"text"});
  }
  getprojectbystartdate(startDate:String):Observable<Object>
  {
    return this.httpClient.get(`${this.restUrl}/getprojectbystartdate/${startDate}`,{responseType:"text"});
  }
  getprojectbyenddate(endDate:String):Observable<Object>
  {
    return this.httpClient.get(`${this.restUrl}/getprojectbyenddate/${endDate}`,{responseType:"text"});
  }

}
