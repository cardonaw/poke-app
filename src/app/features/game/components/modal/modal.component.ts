import {
  Component,
  EventEmitter,
  Input,
  Output,
  type OnInit,
} from '@angular/core';

@Component({
  selector: 'game-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent implements OnInit {
  @Input()
  public visibleModal: boolean = true;

  @Output()
  public hideModal = new EventEmitter<void>();

  ngOnInit(): void {}

  setVisibleFalse() {
    this.hideModal.emit();
  }
}
