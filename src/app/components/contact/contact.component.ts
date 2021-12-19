import { Component, OnInit } from '@angular/core';

import { Contact } from 'src/assets/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  model = new Contact('Ryan', 'rhubbuck@gmail.com', 'Test message');

  submitted = false;

  onSumbit() {
    this.submitted = true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
