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
  currentImageTwo: string = '';
  currentImageThree: string = '';
  currentDescription: string = '';
  currentSourceCode: string = '';
  currentLiveSite: string = '';

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
    this.currentTitle = 'PupExpress';
    this.currentTechs = 'React/Commerce.js/Stripe.js';
    this.currentDescription = 'E-commerce site created using the Angular framework. I used Commerce.js as the back-end, which stores products, tracks sales of each item, and allows for shipping options. Stripe.js was used for the final card payments/processing, although I stopped just before implementing the final pieces of code to connect this to avoid any chance at charging credit cards.';
    this.currentImage = 'Pupexpress-main.png';
    this.currentImageTwo = 'Pupexpress2.png';
    this.currentImageThree = 'Pupexpress3.png';
    this.currentSourceCode = 'https://github.com/rhubbuck/react-ecommerce';
    this.currentLiveSite = 'https://rhubbuck.github.io/react-ecommerce/';
    this.openModal = !this.openModal
  }

  changeModalTwo() {
    this.currentTitle = 'Nama Sushi';
    this.currentTechs = 'React / Firebase';
    this.currentDescription = 'Mock restaurant landing page with restaurant information and menus. Reservation information is saved into a backend database to be reviewed and handled by restaurant management/staff.';
    this.currentImage = 'Nama-main.png';
    this.currentImageTwo = 'Nama2.png';
    this.currentImageThree = 'Nama3.png';
    this.currentSourceCode = 'https://github.com/rhubbuck/react-restaurant';
    this.currentLiveSite = 'https://rhubbuck.github.io/react-restaurant/';
    this.openModal = !this.openModal
  }

  changeModalThree() {
    this.currentTitle = 'Netflix Clone';
    this.currentTechs = 'React / TMDB API';
    this.currentDescription = 'Mock site used as a display of ability to capture the styling and overall feel of a website or project. Seperate movie and TV categories are pulled from The Movie Database API. Selection of a movie opens a modal with match percentage, a description, and further options.';
    this.currentImage = 'Netflix-main.png';
    this.currentImageTwo = 'Netflix4.png';
    this.currentImageThree = 'Netflix3.png';
    this.currentSourceCode = 'https://github.com/rhubbuck/API-clone';
    this.currentLiveSite = 'https://rhubbuck.github.io/API-clone/';
    this.openModal = !this.openModal
  }

  changeModalFour() {
    this.currentTitle = 'Alltrails';
    this.currentTechs = 'Angular / Firebase';
    this.currentDescription = 'Firebase authentication was used to create and store user profiles. A main feed page shows all trails added by all users, while there is a seperate page to view your own trail posts. Once there, you are able to edit those posts and update the database in real-time.';
    this.currentImage = 'Alltrails2.png';
    this.currentImageTwo = 'Alltrails3.png';
    this.currentImageThree = 'Alltrails4.png';
    this.currentSourceCode = 'https://github.com/rhubbuck/angular-crud';
    this.currentLiveSite = 'https://rhubbuck.github.io/angular-crud/';
    this.openModal = !this.openModal
  }

  // changeModalFive() {
  //   this.currentTitle = 'Nama Sushi';
  //   this.currentTechs = 'React / Firebase';
  //   this.currentDescription = 'dsfssdafsdafds.dfs .asdf.sd af. sdafsdafjsdakjf ksdajkfjsd kf ksda jfkdjs akfjdsk fdk asdk fdsakj f';
  //   this.currentImage = 'dddd';
  //   this.openModal = !this.openModal
  // }

  // changeModalSix() {
  //   this.currentTitle = 'Nama Sushi';
  //   this.currentTechs = 'React / Firebase';
  //   this.currentDescription = 'dsfssdafsdafds.dfs .asdf.sd af. sdafsdafjsdakjf ksdajkfjsd kf ksda jfkdjs akfjdsk fdk asdk fdsakj f';
  //   this.currentImage = 'dddd';
  //   this.openModal = !this.openModal
  // }


  onNotifyClick() {
    this.openModal = !this.openModal
  }

  constructor() { }

  ngOnInit(): void {
  }

}
