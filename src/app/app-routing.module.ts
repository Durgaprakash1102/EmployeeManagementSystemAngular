import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';
import { GetemployeesComponent } from './getemployees/getemployees.component';
import { DeleteemployeeComponent } from './deleteemployee/deleteemployee.component';
import { FindemployeesComponent } from './findemployees/findemployees.component';
import { AdddepartmentComponent } from './adddepartment/adddepartment.component';
import { FinddepartmentsComponent } from './finddepartments/finddepartments.component';
import { GetdepartmentsComponent } from './getdepartments/getdepartments.component';
import { UpdatedepartmentComponent } from './updatedepartment/updatedepartment.component';
import { DeletedepartmentComponent } from './deletedepartment/deletedepartment.component';
import { AddprojectComponent } from './addproject/addproject.component';
import { UpdateprojectComponent } from './updateproject/updateproject.component';
import { GetprojectsComponent } from './getprojects/getprojects.component';
import { DeleteprojectComponent } from './deleteproject/deleteproject.component';
import { FindprojectsComponent } from './findprojects/findprojects.component';

const routes: Routes = [{path:`insertemployee`,component:AddemployeeComponent},
{path:`updateemployee`,component:UpdateemployeeComponent},
{path:`getallemployees`,component:GetemployeesComponent},
{path:`deleteemployee`,component:DeleteemployeeComponent},
{path:`findemployees`,component:FindemployeesComponent},
{path:`insertdepartment`,component:AdddepartmentComponent},
{path:`deletedepartment`,component:DeletedepartmentComponent},
{path:`updatedepartment`,component:UpdatedepartmentComponent},
{path:`getalldepartments`,component:GetdepartmentsComponent},
{path:`findalldepartments`,component:FinddepartmentsComponent},
{path:`insertproject`,component:AddprojectComponent},
{path:`updateproject`,component:UpdateprojectComponent},
{path:`getallprojects`,component:GetprojectsComponent},
{path:`deleteproject`,component:DeleteprojectComponent},
{path:`findallprojects`,component:FindprojectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
