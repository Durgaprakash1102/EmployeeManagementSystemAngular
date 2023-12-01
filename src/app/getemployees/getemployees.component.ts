import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-getemployees',
  templateUrl: './getemployees.component.html',
  styleUrls: ['./getemployees.component.css']
})
export class GetemployeesComponent {
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
