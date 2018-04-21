import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonsCheckboxComponent } from './buttons-checkbox.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule
  ],
  declarations: [ButtonsCheckboxComponent],
  exports: [ButtonsCheckboxComponent]
})
export class ButtonsCheckboxModule { }
