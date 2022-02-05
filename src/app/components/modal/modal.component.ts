import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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
  @Input() imageTwo = '';
  @Input() imageThree = '';
  @Input() techs = '';
  @Input() sourceCode = '';
  @Input() liveSite = '';
  @Output() closeModal = new EventEmitter();

  onClick () {
    this.closeModal.emit(false)
  }

  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
}

  constructor( private sanitizer: DomSanitizer ) {}

  ngOnInit(): void {
  }

}
