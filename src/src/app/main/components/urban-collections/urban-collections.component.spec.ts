import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrbanCollectionsComponent } from './urban-collections.component';

describe('UrbanCollectionsComponent', () => {
  let component: UrbanCollectionsComponent;
  let fixture: ComponentFixture<UrbanCollectionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UrbanCollectionsComponent]
    });
    fixture = TestBed.createComponent(UrbanCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
