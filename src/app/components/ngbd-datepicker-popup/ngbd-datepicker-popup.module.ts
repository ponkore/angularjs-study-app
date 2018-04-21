import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbdDatepickerPopupComponent } from './ngbd-datepicker-popup.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule
  ],
  declarations: [NgbdDatepickerPopupComponent],
  exports: [NgbdDatepickerPopupComponent]
})
export class NgbdDatepickerPopupModule { }
