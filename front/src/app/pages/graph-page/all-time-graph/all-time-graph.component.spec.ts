import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTimeGraphComponent } from './all-time-graph.component';

describe('AllTimeGraphComponent', () => {
  let component: AllTimeGraphComponent;
  let fixture: ComponentFixture<AllTimeGraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllTimeGraphComponent]
    });
    fixture = TestBed.createComponent(AllTimeGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
