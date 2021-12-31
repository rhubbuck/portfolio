import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { FirebaseService } from 'src/app/firebase.service';

import { Contact } from 'src/assets/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form! : FormGroup;

  showDiv: boolean = false;

  constructor( public firebaseService: FirebaseService, public fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onSubmit(): void{
    this.firebaseService.addContact(this.form.value);
    this.showDiv = true;
    this.form.reset();
  }

  onClose(): void {
    this.showDiv = false;
  }
}
