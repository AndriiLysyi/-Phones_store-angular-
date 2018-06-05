import { Component, OnInit , Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {Phone} from '../phone';
import {PhoneService} from'../phone.service';
@Component({
  selector: 'app-phone-detail',
  templateUrl: './phone-detail.component.html',
  styleUrls: ['./phone-detail.component.css']
})
export class PhoneDetailComponent implements OnInit {

  @Input() phone: Phone;
  constructor(
    private route: ActivatedRoute,
    private phoneService: PhoneService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getPhone();
  }

  getPhone(): void{
    const price = +this.route.snapshot.paramMap.get('price');
    this.phoneService.getPhone(price)
      .subscribe(phone => this.phone= phone);
  }
  goBack(): void {
    this.location.back();
  }

}
