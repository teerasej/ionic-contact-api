import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NavController } from '@ionic/angular';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  
  contacts = [];

  constructor(private http: HttpClient, private navCtrl: NavController, private contactService: ContactService){
  }

  ngOnInit(): void {
    this.http
        .get("https://randomuser.me/api/?results=20")
        .subscribe((data:any) => {
            console.log(data);
            this.contactService.contacts = data.results;
            console.log(this.contactService.contacts);
            this.contacts = data.results;
        });
      
  }

  viewDetail(item){
    console.log(item);
    this.navCtrl.navigateForward('/detail/' + item.id.name + item.id.value);
  }

}
