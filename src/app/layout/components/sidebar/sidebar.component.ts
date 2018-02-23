import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Link } from '../../../domain/model/link.model';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  links: Link[];
  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor() {
    this.links = [
      new Link('/home/vacancies', 'Vacancies')
    ];
  }

  ngOnInit() {
  }

  toggleMenu() {
    this.sidenav.close();
  }

}
