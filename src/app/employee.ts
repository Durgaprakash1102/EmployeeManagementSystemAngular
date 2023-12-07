import { Department } from "./department";
import { Project } from "./project";

export class Employee {
    employeeId:Number=0;
	employeeName:String="";
	email:String="";
	age:Number=0;
	phoneNumber:Number=0;
	hireDate:String="";
	jobTitle:String="";
	salary:Number=0;
	department: Department = new Department;

	projects: Project[] = [];
	departmentId!: number;
    projectIds: number[] = [];

    constructor(){}
}
