import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetPageComponent } from './net-page.component';

describe('NetPageComponent', () => {
  let component: NetPageComponent;
  let fixture: ComponentFixture<NetPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
