import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinddepartmentsComponent } from './finddepartments.component';

describe('FinddepartmentsComponent', () => {
  let component: FinddepartmentsComponent;
  let fixture: ComponentFixture<FinddepartmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinddepartmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinddepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
