import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  scrollToProjects() {
    window.scroll({
      top: 1450,
      behavior: 'smooth'
    })
  }

  scrollToContact() {
    window.scroll({
      top: 2800,
      behavior: 'smooth'
    })
  }

  constructor() { }

  ngOnInit(): void {
  }

}
