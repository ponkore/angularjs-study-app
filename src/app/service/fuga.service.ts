import { Injectable } from '@angular/core';

@Injectable()
export class FugaService {

  constructor() { }

  adder(a: number, b: number): number {
    return a + b;
  }
}
