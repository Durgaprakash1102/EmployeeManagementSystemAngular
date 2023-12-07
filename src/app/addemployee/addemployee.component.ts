import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Department } from '../department';
import { Project } from '../project';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
  constructor(private employeeService:EmployeeService){}
  employee:Employee=new Employee();
  department: Department = new Department;
	projects: Project= new Project;
	departmentId!: number;
  projectIds: number[] = [];
  msg:any="";
  ngOnInit(): void {
      throw new Error("Method not implemented");
  }
  addEmployee(){
    this.employeeService.saveEmployee(this.employee).subscribe(data=>{this.msg=data;});
  }


}
