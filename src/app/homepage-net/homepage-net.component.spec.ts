import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageNetComponent } from './homepage-net.component';

describe('HomepageNetComponent', () => {
  let component: HomepageNetComponent;
  let fixture: ComponentFixture<HomepageNetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageNetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageNetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
