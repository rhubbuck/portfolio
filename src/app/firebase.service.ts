import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  collection!: AngularFirestoreCollection<any>;

  constructor( public afs: AngularFirestore ) { 

    this.collection = this.afs.collection('contact');
  }

  addContact(contactInfo: any) {
    this.collection.add(contactInfo);
  }
}
