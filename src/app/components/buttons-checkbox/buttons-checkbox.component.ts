import { Component, OnInit } from '@angular/core';
import { FugaService } from '../../service/fuga.service';

@Component({
  selector: 'app-buttons-checkbox',
  templateUrl: './buttons-checkbox.component.html',
  styleUrls: ['./buttons-checkbox.component.scss']
})
export class ButtonsCheckboxComponent implements OnInit {

  constructor(private fugaService: FugaService) { }

  ngOnInit() {
  }

  model = {
    left: true,
    middle: false,
    right: false
  };

  callAdder(a: number, b: number): number {
    return this.fugaService.adder(a, b);
  }
}
