import { Component } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  closeResult: string;

  constructor(private modalService: NgbModal) {
  }

  open(content) {
    this.modalService.open(content);
  }

  close(message) {
    console.log('(in app)close message=' + message);
  }

  dismiss(message) {
    console.log('(in app)dismiss message=' + message);
  }
}
