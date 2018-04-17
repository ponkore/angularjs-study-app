import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsCheckboxComponent } from './buttons-checkbox.component';

describe('ButtonsCheckboxComponent', () => {
  let component: ButtonsCheckboxComponent;
  let fixture: ComponentFixture<ButtonsCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonsCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
