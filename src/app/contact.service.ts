import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private baseUrl = 'http://localhost:8081/springboot-crud-rest/api/v1/contacts';

  constructor(private http: HttpClient) { }

   getContact(id: number): Observable<any> {
     return this.http.get(`${this.baseUrl}/${id}`);
  }

   createContact(contact: any): Observable<any> {
    return of(localStorage.setItem(`${contact.id}`,JSON.stringify(contact)));
    //return this.http.post(`${this.baseUrl}`, contact);
   }

   updateContact(id: number, value: any): Observable<any> {
    //let obj = JSON.parse(localStorage.getItem(`${id}`))
    localStorage.removeItem(`${id}`);
    return of(localStorage.setItem(value.id,JSON.stringify(value)));
     //return this.http.put(`${this.baseUrl}/${id}`, value);
   }

   deleteContact(id: number): Observable<any> {
     return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
   }

  getContactsList(): Observable<any> {
    return  of(JSON.parse(localStorage.getItem('contactsList')));
  }

 }
