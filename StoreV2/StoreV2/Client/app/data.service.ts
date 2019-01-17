import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class DataService {

  private messageSource = new BehaviorSubject("");
  currentMessage = this.messageSource.asObservable();

  constructor() { }
  arr: Array<Pass>=[];

  changeMessage(message: string) {
    this.messageSource.next(message)
  }

}
class Pass{
    personName: string;
    stockName: string;
    price: number;


}