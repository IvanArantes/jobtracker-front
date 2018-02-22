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
    this.toggle.emit();
  }
}
