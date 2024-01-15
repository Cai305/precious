import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreCollectionComponent } from './explore-collection.component';

describe('ExploreCollectionComponent', () => {
  let component: ExploreCollectionComponent;
  let fixture: ComponentFixture<ExploreCollectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExploreCollectionComponent]
    });
    fixture = TestBed.createComponent(ExploreCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
