import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  // @Input() closeModal; 
  @Output() closeModal = new EventEmitter();

  onClick () {
    this.closeModal.emit(false)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
