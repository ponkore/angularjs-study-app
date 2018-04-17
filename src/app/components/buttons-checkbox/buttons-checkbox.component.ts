import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-buttons-checkbox',
    templateUrl: './buttons-checkbox.component.html',
    styleUrls: ['./buttons-checkbox.component.scss']
})
export class ButtonsCheckboxComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }
    model = {
        left: true,
        middle: false,
        right: false
    };
}
