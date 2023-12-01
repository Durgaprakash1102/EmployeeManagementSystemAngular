import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from '../department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-adddepartment',
  templateUrl: './adddepartment.component.html',
  styleUrls: ['./adddepartment.component.css']
})
export class AdddepartmentComponent {
  constructor(private departmentService:DepartmentService){}
  department:Department=new Department();
  msg:any="";
  ngOnInit(): void {
      throw new Error("Method not implemented");
  }
  addDepartment(){
    this.departmentService.saveDepartment(this.department).subscribe(data=>{this.msg=data;});
  }


}
