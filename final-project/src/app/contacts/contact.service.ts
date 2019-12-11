import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Contact } from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private remoteUrlPattern = 'http://localhost:3000/contacts';

  constructor(private http: HttpClient) { }

  public save(contact: Object): Observable<Contact> {
    const contact$ = this.http.post<Contact>(this.remoteUrlPattern, contact);
    return contact$;
  }
}
