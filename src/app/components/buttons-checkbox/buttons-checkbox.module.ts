import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonsCheckboxComponent } from './buttons-checkbox.component';
import { FugaService } from '../../service/fuga.service';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
  ],
  declarations: [ButtonsCheckboxComponent],
  exports: [ButtonsCheckboxComponent],
  providers: [FugaService]
})
export class ButtonsCheckboxModule { }
