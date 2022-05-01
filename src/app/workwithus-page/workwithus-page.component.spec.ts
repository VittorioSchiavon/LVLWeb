import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkwithusPageComponent } from './workwithus-page.component';

describe('WorkwithusPageComponent', () => {
  let component: WorkwithusPageComponent;
  let fixture: ComponentFixture<WorkwithusPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkwithusPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkwithusPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
