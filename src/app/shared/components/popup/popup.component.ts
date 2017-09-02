import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent {

  @Output() public outsideClick: EventEmitter<{}> = new EventEmitter();

  public closePopup(): void {
    this.outsideClick.emit();
  }

  @HostListener('document:click', ['$event', '$event.target'])
  public onClick(event: MouseEvent, targetElement: HTMLElement): void {
    if (!targetElement) {
      return;
    }
    const clickedOutSide: boolean = targetElement.classList.contains('overlay');
    if (clickedOutSide) {
      this.closePopup();
    }
  }

  @HostListener('document:keyup', ['$event'])
  public onKeyDown(event: KeyboardEvent): void {

    const code: number = event.keyCode;
    if (code === 27) {
      this.closePopup();
    }
  }
}
