import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrapgsComponent } from './grapgs.component';

describe('GrapgsComponent', () => {
  let component: GrapgsComponent;
  let fixture: ComponentFixture<GrapgsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrapgsComponent]
    });
    fixture = TestBed.createComponent(GrapgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
