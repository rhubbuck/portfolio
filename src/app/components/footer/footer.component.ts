import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  scrollToTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }

  constructor() { }

  ngOnInit(): void {
  }

}
