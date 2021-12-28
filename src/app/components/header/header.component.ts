import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  openMenu: boolean = false;

  onNotifyClick() {
    this.openMenu = !this.openMenu
  }

  constructor() { }

  ngOnInit(): void {
  }

}
