import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonsCheckboxComponent } from './buttons-checkbox.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule   // これが重要!!!
  ],
  declarations: [ButtonsCheckboxComponent],
  exports: [ButtonsCheckboxComponent]
})
export class ButtonsCheckboxModule { }
