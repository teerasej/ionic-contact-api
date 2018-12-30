import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts = [];

  constructor() { }

  getFromIdValue( idValue:string ) {
    let result = this.contacts.find((contact)=>{
      let source = contact.id.name + contact.id.value;
      console.log(source + ", " + idValue);
      if(source === idValue){
        return true;
      }
      return false;
    });

    return result;
  }
}
