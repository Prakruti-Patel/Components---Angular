import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }
  getContact()
  {
    const contactList = [
      {contactId : 1, contactName : 'abc'},
      {contactId : 1, contactName : 'def'},
      {contactId : 1, contactName : 'ghi'},
      {contactId : 1, contactName : 'jkl'},
      {contactId : 1, contactName : 'mno'},
      {contactId : 1, contactName : 'pqr'}
    ];
    return contactList;
  }
}
