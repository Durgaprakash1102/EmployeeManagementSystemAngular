import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-getprojects',
  templateUrl: './getprojects.component.html',
  styleUrls: ['./getprojects.component.css']
})
export class GetprojectsComponent {
  projects:Project[]=[];
  project:Project=new Project();
  constructor(private projectService:ProjectService){}
  ngOnInit(): void {
      this.getAllProjects();
  }
  getAllProjects(){
    this.projectService.getProjects().subscribe(data=>{this.projects=data;});
  }


}
