import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ModalDialogComponent } from './modal-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule
  ],
  declarations: [ModalDialogComponent],
  exports: [ModalDialogComponent]
})
export class ModalDialogModule { }
