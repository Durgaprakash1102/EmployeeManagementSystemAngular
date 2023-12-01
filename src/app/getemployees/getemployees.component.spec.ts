import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetemployeesComponent } from './getemployees.component';

describe('GetemployeesComponent', () => {
  let component: GetemployeesComponent;
  let fixture: ComponentFixture<GetemployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetemployeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetemployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
