import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements AfterViewInit {
  //Get the child component to be used in the parent.
  @ViewChild(SidebarComponent)
  private sidebarComponent: SidebarComponent;


  ngAfterViewInit(): void {
    //toggle the menu when the child(SidebarComponent) loads.
    //this.toggleMenu();
  }
  constructor() { }

  toggleMenu() {
    this.sidebarComponent.toggleMenu();
  }


}
