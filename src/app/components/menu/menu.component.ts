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

  constructor() { }

  ngOnInit(): void {
  }

}
