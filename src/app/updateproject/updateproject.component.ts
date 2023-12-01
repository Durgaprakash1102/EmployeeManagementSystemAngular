import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-updateproject',
  templateUrl: './updateproject.component.html',
  styleUrls: ['./updateproject.component.css']
})
export class UpdateprojectComponent {
  constructor(private projectService:ProjectService){}
  project:Project=new Project();
  msg:any="";
  ngOnInit(): void {
      throw new Error("Method not implemented");
  }
  updateProject(){
    this.projectService.updateproject(this.project).subscribe(data=>{this.msg=data;});
  }

}
