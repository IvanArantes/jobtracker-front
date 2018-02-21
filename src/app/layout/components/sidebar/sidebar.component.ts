import { Component, OnInit } from '@angular/core';
import { Link } from '../../../domain/model/link.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  links: Link[];

  constructor() {
    this.links = [
      new Link('/home/vacancies', 'Vacancies')
    ];
  }

  ngOnInit() {
  }

}
