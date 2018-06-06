import { Component, OnInit } from '@angular/core';

import {Phone} from '../phone';
import {PhoneService} from'../phone.service';


@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent implements OnInit {
  phones: Phone[];
  constructor( private phoneService: PhoneService) { }
  
  add(name: string, price: string): void {
    let phone = {name:name, price: +price}; 
    if (!name || !price) { return; }
    this.phoneService.addPhone(phone as Phone)
      .subscribe(phone => {
        this.phones.push(phone);
      });
  }

  delete(phone: Phone): void {
    this.phones = this.phones.filter(h => h !== phone);
    this.phoneService.deletePhone(phone).subscribe();
  }

  getPhones(): void{
    this.phoneService.getPhones()
    .subscribe( phones => this.phones = phones);
  }
  ngOnInit() {
    this.getPhones();
  }

}
