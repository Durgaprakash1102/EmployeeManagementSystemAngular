import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from '../department';
import { DepartmentService } from '../department.service';


@Component({
  selector: 'app-updatedepartment',
  templateUrl: './updatedepartment.component.html',
  styleUrls: ['./updatedepartment.component.css']
})
export class UpdatedepartmentComponent {
  constructor(private departmentService:DepartmentService){}
  department:Department=new Department();
  msg:any="";
  ngOnInit(): void {
      throw new Error("Method not implemented");
  }
  updateDepartment(){
    this.departmentService.updateDepartment(this.department).subscribe(data=>{this.msg=data;});
  }


}
