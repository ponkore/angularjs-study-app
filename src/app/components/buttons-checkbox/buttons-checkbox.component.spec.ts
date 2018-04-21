import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ButtonsCheckboxComponent } from './buttons-checkbox.component';
import { FugaService } from '../../service/fuga.service';

describe('ButtonsCheckboxComponent', () => {
  let component: ButtonsCheckboxComponent;
  let fixture: ComponentFixture<ButtonsCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        ButtonsCheckboxComponent
      ],
      providers: [FugaService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('component.callAdder(1, 2) の結果が 3 になる', () => {
    expect(component.callAdder(1, 2)).toEqual(3);
  });
});
