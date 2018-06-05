import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { Phone } from '../phone';
import {PhoneService} from'../phone.service';

@Component({
  selector: 'app-phone-search',
  templateUrl: './phone-search.component.html',
  styleUrls: ['./phone-search.component.css']
})
export class PhoneSearchComponent implements OnInit {
 phones$: Observable<Phone[]>;
 private searchTerms = new Subject<string>();

  constructor(private phoneService: PhoneService) { }

  search(term: string): void{
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.phones$ = this.searchTerms.pipe(
      debounceTime(300),
 
      // ignore new term if same as previous term
      distinctUntilChanged(),
 
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.phoneService.searchPhones(term)),
    );
  }

}
