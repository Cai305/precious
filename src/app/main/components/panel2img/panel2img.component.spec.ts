import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Panel2imgComponent } from './panel2img.component';

describe('Panel2imgComponent', () => {
  let component: Panel2imgComponent;
  let fixture: ComponentFixture<Panel2imgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Panel2imgComponent]
    });
    fixture = TestBed.createComponent(Panel2imgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
