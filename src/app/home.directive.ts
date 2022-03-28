import { Directive } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Directive({
  selector: '[appHome]',
})
export class HomeDirective {
  public sourceMsg = new BehaviorSubject('');
  currentMsg = this.sourceMsg.asObservable();
  constructor() {
    // constructor(element: ElementRef) {
    // element.nativeElement.style.color = '#e91e63';
    // element.nativeElement.style.fontSize = '100px';
    // element.nativeElement.style.textAlign = 'center';
  }
  changeMessage(message: string) {
    this.sourceMsg.next(message);
  }
}
