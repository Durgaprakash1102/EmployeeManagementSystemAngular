import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindprojectsComponent } from './findprojects.component';

describe('FindprojectsComponent', () => {
  let component: FindprojectsComponent;
  let fixture: ComponentFixture<FindprojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindprojectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
