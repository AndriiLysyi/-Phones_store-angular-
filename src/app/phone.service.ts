import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Phone } from './phone';
import { PHONES } from './mock-phones';
import { MessageService } from './message.service';



@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  constructor(private messageService: MessageService) { }
  getPhones():Observable< Phone[]>{
    this.messageService.add('PhoneService: feched phones ');
    return of( PHONES);
  }
}
