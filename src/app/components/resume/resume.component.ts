import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  @Output() closeResume = new EventEmitter();

  onClick () {
    this.closeResume.emit(false)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
