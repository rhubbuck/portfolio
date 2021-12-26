import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() item = '';
  @Input() title = '';
  @Input() description= '';
  @Input() image = '';
  @Input() techs = '';
  @Output() closeModal = new EventEmitter();

  onClick () {
    this.closeModal.emit(false)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
