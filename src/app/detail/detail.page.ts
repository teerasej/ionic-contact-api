import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  constructor(private  route: ActivatedRoute, private contactService:ContactService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      console.log(params);
      console.log('Contacts in service:');
      console.log(this.contactService.contacts);
    });
  }

}
