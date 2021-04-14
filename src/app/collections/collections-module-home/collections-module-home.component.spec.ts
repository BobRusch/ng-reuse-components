import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsModuleHomeComponent } from './collections-module-home.component';

describe('CollectionsModuleHomeComponent', () => {
  let component: CollectionsModuleHomeComponent;
  let fixture: ComponentFixture<CollectionsModuleHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionsModuleHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionsModuleHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
