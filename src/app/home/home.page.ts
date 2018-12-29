import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  
  contacts = [];

  constructor(private http: HttpClient, private navCtrl: NavController){
  }

  ngOnInit(): void {
    this.http
        .get("https://randomuser.me/api/?results=20")
        .subscribe((data:any) => {
            console.log(data);
            this.contacts = data.results;
        });
      
  }

  viewDetail(item){
    this.navCtrl.navigateForward('/detail');
  }

}
