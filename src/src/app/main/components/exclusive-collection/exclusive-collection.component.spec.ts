import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExclusiveCollectionComponent } from './exclusive-collection.component';

describe('ExclusiveCollectionComponent', () => {
  let component: ExclusiveCollectionComponent;
  let fixture: ComponentFixture<ExclusiveCollectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExclusiveCollectionComponent]
    });
    fixture = TestBed.createComponent(ExclusiveCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
