import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from '../department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-getdepartments',
  templateUrl: './getdepartments.component.html',
  styleUrls: ['./getdepartments.component.css']
})
export class GetdepartmentsComponent {
  departments:Department[]=[];
  department:Department=new Department();
  constructor(private departmentService:DepartmentService){}
  ngOnInit(): void {
      this.getAllDepartments();
  }
  getAllDepartments(){
    this.departmentService.getDepartments().subscribe(data=>{this.departments=data;});
  }

}
