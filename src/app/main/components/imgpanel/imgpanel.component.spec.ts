import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgpanelComponent } from './imgpanel.component';

describe('ImgpanelComponent', () => {
  let component: ImgpanelComponent;
  let fixture: ComponentFixture<ImgpanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImgpanelComponent]
    });
    fixture = TestBed.createComponent(ImgpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
