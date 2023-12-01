import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindemployeesComponent } from './findemployees.component';

describe('FindemployeesComponent', () => {
  let component: FindemployeesComponent;
  let fixture: ComponentFixture<FindemployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindemployeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindemployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
