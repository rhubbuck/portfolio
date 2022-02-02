import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

  openResume: boolean = false;

  changeResume() {
    this.openResume = !this.openResume;
  }

  onNotifyClick() {
    this.openResume = !this.openResume;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
