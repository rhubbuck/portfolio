import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output() closeMenu = new EventEmitter();

  onClick () {
    this.closeMenu.emit(false)
  }

  
  scrollToAbout() {
    window.scroll({
      top: 540,
      behavior: 'smooth'
    });
    this.closeMenu.emit(false);
  }

  scrollToProjects() {
    window.scroll({
      top: 1380,
      behavior: 'smooth'
    });
    this.closeMenu.emit(false);
  }

  scrollToContact() {
    window.scroll({
      top: 2700,
      behavior: 'smooth'
    });
    this.closeMenu.emit(false);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
