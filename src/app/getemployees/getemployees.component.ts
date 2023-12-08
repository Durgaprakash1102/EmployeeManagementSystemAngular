import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Project } from '../project';
import { Department } from '../department';

@Component({
  selector: 'app-getemployees',
  templateUrl: './getemployees.component.html',
  styleUrls: ['./getemployees.component.css']
})
export class GetemployeesComponent implements OnInit {
  employees:Employee[]=[];
  employee:Employee=new Employee();
  constructor(private employeeService:EmployeeService){}
  ngOnInit(): void {
      this.getAllEmployees();
  }
  getAllEmployees(){
    this.employeeService.getEmployees().subscribe(data=>{this.employees=data;});
  }

}
