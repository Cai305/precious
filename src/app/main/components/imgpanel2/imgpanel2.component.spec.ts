import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Imgpanel2Component } from './imgpanel2.component';

describe('Imgpanel2Component', () => {
  let component: Imgpanel2Component;
  let fixture: ComponentFixture<Imgpanel2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Imgpanel2Component]
    });
    fixture = TestBed.createComponent(Imgpanel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
