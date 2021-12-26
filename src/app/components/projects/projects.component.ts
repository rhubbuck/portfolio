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
  stateFive: boolean = false;
  stateSix: boolean = false;

  openModal: boolean = false;

  currentItem: string = 'test';
  currentTitle: string = '';
  currentTechs: string = '';
  currentImage: string = '';
  currentDescription: string = '';

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

  changeStateFive() {
    this.stateFive = !this.stateFive
  }

  changeStateSix() {
    this.stateSix = !this.stateSix
  }

  changeModal() {
    this.currentTitle = 'new project';
    this.currentTechs = 'new project';
    this.currentDescription = 'dsfssdafsdafds.dfs .asdf.sd af. sdafsdafjsdakjf ksdajkfjsd kf ksda jfkdjs akfjdsk fdk asdk fdsakj f';
    this.currentImage = 'dddd';
    this.openModal = !this.openModal
  }

  changeModalTwo() {
    this.currentTitle = 'All Trails';
    this.currentTechs = 'Angular / Firebase';
    this.currentDescription = 'dsfssdafsdafds.dfs .asdf.sd af. sdafsdafjsdakjf ksdajkfjsd kf ksda jfkdjs akfjdsk fdk asdk fdsakj f';
    this.currentImage = 'dddd';
    this.openModal = !this.openModal
  }

  changeModalThree() {
    this.currentTitle = 'PupExpress';
    this.currentTechs = 'React / Commerce.js / Stripe';
    this.currentDescription = 'dsfssdafsdafds.dfs .asdf.sd af. sdafsdafjsdakjf ksdajkfjsd kf ksda jfkdjs akfjdsk fdk asdk fdsakj f';
    this.currentImage = 'dddd';
    this.openModal = !this.openModal
  }

  changeModalFour() {
    this.currentTitle = 'Nama Sushi';
    this.currentTechs = 'React / Firebase';
    this.currentDescription = 'dsfssdafsdafds.dfs .asdf.sd af. sdafsdafjsdakjf ksdajkfjsd kf ksda jfkdjs akfjdsk fdk asdk fdsakj f';
    this.currentImage = 'dddd';
    this.openModal = !this.openModal
  }


  onNotifyClick() {
    this.openModal = !this.openModal
  }

  constructor() { }

  ngOnInit(): void {
  }

}
