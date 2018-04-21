import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdDatepickerPopupComponent } from './ngbd-datepicker-popup.component';

describe('NgbdDatepickerPopupComponent', () => {
  let component: NgbdDatepickerPopupComponent;
  let fixture: ComponentFixture<NgbdDatepickerPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NgbModule.forRoot(),
        FormsModule
      ],
      declarations: [
        NgbdDatepickerPopupComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbdDatepickerPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
