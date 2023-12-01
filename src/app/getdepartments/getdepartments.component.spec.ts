import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetdepartmentsComponent } from './getdepartments.component';

describe('GetdepartmentsComponent', () => {
  let component: GetdepartmentsComponent;
  let fixture: ComponentFixture<GetdepartmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetdepartmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetdepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
