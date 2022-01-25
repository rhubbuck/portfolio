import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

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

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }

  check: boolean = false;
}
