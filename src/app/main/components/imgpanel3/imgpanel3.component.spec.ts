import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Imgpanel3Component } from './imgpanel3.component';

describe('Imgpanel3Component', () => {
  let component: Imgpanel3Component;
  let fixture: ComponentFixture<Imgpanel3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Imgpanel3Component]
    });
    fixture = TestBed.createComponent(Imgpanel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
