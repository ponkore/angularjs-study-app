import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonsCheckboxModule } from './components/buttons-checkbox/buttons-checkbox.module';
import { NgbdDatepickerPopupModule } from './components/ngbd-datepicker-popup/ngbd-datepicker-popup.module';
import { FugaService } from './service/fuga.service';
import { NgSpinKitModule } from 'ng-spin-kit';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    ButtonsCheckboxModule,
    NgbdDatepickerPopupModule,
    NgSpinKitModule,
  ],
  providers: [FugaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
