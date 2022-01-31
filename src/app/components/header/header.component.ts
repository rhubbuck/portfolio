import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  check: boolean = false;
  openMenu: boolean = false;

  onNotifyClick() {
    this.openMenu = !this.openMenu
  }

  scrollToTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }

  scrollToAbout() {
    window.scroll({
      top: 700,
      behavior: 'smooth'
    })
  }

  scrollToProjects() {
    window.scroll({
      top: 1650,
      behavior: 'smooth'
    })
  }

  scrollToContact() {
    window.scroll({
      top: 3000,
      behavior: 'smooth'
    })
  }

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 645) {
          this.check = true;
      } else {this.check = false};
    });
  }
}
