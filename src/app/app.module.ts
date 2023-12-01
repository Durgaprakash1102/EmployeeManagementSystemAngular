import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';
import { GetemployeesComponent } from './getemployees/getemployees.component';
import { DeleteemployeeComponent } from './deleteemployee/deleteemployee.component';
import { FindemployeesComponent } from './findemployees/findemployees.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdddepartmentComponent } from './adddepartment/adddepartment.component';
import { GetdepartmentsComponent } from './getdepartments/getdepartments.component';
import { UpdatedepartmentComponent } from './updatedepartment/updatedepartment.component';
import { DeletedepartmentComponent } from './deletedepartment/deletedepartment.component';
import { FinddepartmentsComponent } from './finddepartments/finddepartments.component';
import { AddprojectComponent } from './addproject/addproject.component';
import { DeleteprojectComponent } from './deleteproject/deleteproject.component';
import { FindprojectsComponent } from './findprojects/findprojects.component';
import { GetprojectsComponent } from './getprojects/getprojects.component';
import { UpdateprojectComponent } from './updateproject/updateproject.component';

@NgModule({
  declarations: [
    AppComponent,
    AddemployeeComponent,
    UpdateemployeeComponent,
    GetemployeesComponent,
    DeleteemployeeComponent,
    FindemployeesComponent,
    AdddepartmentComponent,
    GetdepartmentsComponent,
    UpdatedepartmentComponent,
    DeletedepartmentComponent,
    FinddepartmentsComponent,
    AddprojectComponent,
    DeleteprojectComponent,
    FindprojectsComponent,
    GetprojectsComponent,
    UpdateprojectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
