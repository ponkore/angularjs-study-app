import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ButtonsCheckboxComponent } from './components/buttons-checkbox/buttons-checkbox.component';
import { NgbdDatepickerPopupComponent } from './components/ngbd-datepicker-popup/ngbd-datepicker-popup.component';

@NgModule({
    declarations: [
        AppComponent,
        ButtonsCheckboxComponent,
        NgbdDatepickerPopupComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
