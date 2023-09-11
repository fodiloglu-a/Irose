import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveYearGraphComponent } from './five-year-graph.component';

describe('FiveYearGraphComponent', () => {
  let component: FiveYearGraphComponent;
  let fixture: ComponentFixture<FiveYearGraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiveYearGraphComponent]
    });
    fixture = TestBed.createComponent(FiveYearGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
