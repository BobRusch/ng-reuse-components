import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsModuleHomeComponent } from './views-module-home.component';

describe('ViewsModuleHomeComponent', () => {
  let component: ViewsModuleHomeComponent;
  let fixture: ComponentFixture<ViewsModuleHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsModuleHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsModuleHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
