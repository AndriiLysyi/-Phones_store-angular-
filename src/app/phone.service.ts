import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { Phone } from './phone';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { MessageService } from './message.service';



@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  private phonesUrl = environment.apiUrl;
  constructor(private http: HttpClient, private messageService: MessageService) { }


  getPhones():Observable< Phone[]>{
   // this.messageService.add('PhoneService: feched phones ');
    return this.http.get<Phone[]>(this.phonesUrl)
    .pipe(
      tap(phones => this.log(`fetched phones`)),
      catchError(this.handleError('getPhones', []))
    );

  }

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private log (message: string){
    this.messageService.add('PhoneService'+message);
  }

  getPhone(id: number): Observable<Phone>{
    const url = `${this.phonesUrl}/${id}`;
    return this.http.get<Phone>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Phone>(`getHero id=${id}`))
    );
    
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  updatePhone (phone: Phone): Observable<any> {
    return this.http.put(`${this.phonesUrl}/${phone.id}`, phone, this.httpOptions).pipe(
      tap(_ => this.log(`updated phone id=${phone.id}`)),
      catchError(this.handleError<any>('updatedPhone'))
    );
  }
  addPhone (hero: Phone): Observable<Phone> {
    return this.http.post<Phone>(this.phonesUrl, hero, this.httpOptions).pipe(
      tap((phone: Phone) => this.log(`added phone w/ id=${phone.id}`)),
      catchError(this.handleError<Phone>('addPhone'))
    );
  }

  deletePhone (phone: Phone | number): Observable<Phone> {
    const id = typeof phone === 'number' ? phone : phone.id;
    const url = `${this.phonesUrl}/${id}`;
  
    return this.http.delete<Phone>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted phone id=${id}`)),
      catchError(this.handleError<Phone>('deletePhone'))
    );
  }

  searchPhones(term: string): Observable<Phone[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Phone[]>(`${this.phonesUrl}/?q=${term}`).pipe(
      tap(_ => this.log(`found phones matching "${term}"`)),
      catchError(this.handleError<Phone[]>('searchPhones', []))
    );
  }
  
}
