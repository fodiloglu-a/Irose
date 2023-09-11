import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthGraphComponent } from './month-graph.component';

describe('MonthGraphComponent', () => {
  let component: MonthGraphComponent;
  let fixture: ComponentFixture<MonthGraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonthGraphComponent]
    });
    fixture = TestBed.createComponent(MonthGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
