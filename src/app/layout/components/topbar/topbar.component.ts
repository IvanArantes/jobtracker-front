import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {

  @Output() toggle = new EventEmitter();

  constructor() { }

  public toggleMenu() {
    //Emit event when user clicks the menu button. This event is catched in baseComponent
    this.toggle.emit();
  }
}
