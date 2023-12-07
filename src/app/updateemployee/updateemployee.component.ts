import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Department } from '../department';
import { Project } from '../project';

@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.css']
})
export class UpdateemployeeComponent {
  constructor(private employeeService:EmployeeService){}
  employee:Employee=new Employee();
  departmentId: number | null = null;
    projectIds: number[] = [];
  msg:any="";
  ngOnInit(): void {
      throw new Error("Method not implemented");
  }
  updateEmployee(){
    this.employeeService.updateEmployee(this.employee).subscribe(data=>{this.msg=data;});
  }


}
