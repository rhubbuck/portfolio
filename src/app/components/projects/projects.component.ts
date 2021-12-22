import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  state: boolean = false;
  stateTwo: boolean = false;
  stateThree: boolean = false;
  stateFour: boolean = false;

  changeState() {
    this.state = !this.state;
  }

  changeStateTwo() {
    this.stateTwo = !this.stateTwo
  }

  changeStateThree() {
    this.stateThree = !this.stateThree
  }

  changeStateFour() {
    this.stateFour = !this.stateFour
  }

  constructor() { }

  ngOnInit(): void {
  }

}
