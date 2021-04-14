import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModsModuleHomeComponent } from './mods-module-home.component';

describe('ModsModuleHomeComponent', () => {
  let component: ModsModuleHomeComponent;
  let fixture: ComponentFixture<ModsModuleHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModsModuleHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModsModuleHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
