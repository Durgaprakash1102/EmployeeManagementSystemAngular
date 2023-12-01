import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectComponent {
  constructor(private projectService:ProjectService){}
  project:Project=new Project();
  msg:any="";
  ngOnInit(): void {
      throw new Error("Method not implemented");
  }
  addProject(){
    this.projectService.saveproject(this.project).subscribe(data=>{this.msg=data;});
  }

}
