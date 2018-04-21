import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonsCheckboxModule } from './components/buttons-checkbox/buttons-checkbox.module';
import { NgbdDatepickerPopupModule } from './components/ngbd-datepicker-popup/ngbd-datepicker-popup.module';
import { FugaService } from './service/fuga.service';
import { ModalDialogModule } from './components/modal-dialog/modal-dialog.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    ButtonsCheckboxModule,
    NgbdDatepickerPopupModule,
    ModalDialogModule
  ],
  providers: [FugaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
