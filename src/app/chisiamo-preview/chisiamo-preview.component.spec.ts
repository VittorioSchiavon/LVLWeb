import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChisiamoPreviewComponent } from './chisiamo-preview.component';

describe('ChisiamoPreviewComponent', () => {
  let component: ChisiamoPreviewComponent;
  let fixture: ComponentFixture<ChisiamoPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChisiamoPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChisiamoPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
