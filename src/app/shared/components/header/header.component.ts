import { Component, OnInit } from '@angular/core';
import { ROUTES } from 'src/app/enums/routes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  routsEnum = ROUTES;
  ngOnInit(): void {}
}
