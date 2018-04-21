import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';

import { ButtonsCheckboxModule } from './components/buttons-checkbox/buttons-checkbox.module';
import { NgbdDatepickerPopupModule } from './components/ngbd-datepicker-popup/ngbd-datepicker-popup.module';
import { FugaService } from './service/fuga.service';

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
    NgbdDatepickerPopupModule
  ],
  providers: [FugaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
