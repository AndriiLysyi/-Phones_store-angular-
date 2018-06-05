import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { Phone } from './phone';
import { PHONES } from './mock-phones';
import { MessageService } from './message.service';



@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  constructor(private http: HttpClient, private messageService: MessageService) { }
  getPhones():Observable< Phone[]>{
    this.messageService.add('PhoneService: feched phones ');
    return of( PHONES);
  }

  getPhone(price: number): Observable<Phone>{
    this.messageService.add(`PhoneService: fetched phone price=${price}`);
    return of(PHONES.find(phone => phone.price === price));
  }
}
