import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Input() public displayName = '';
  @Input() public displayRole = '';

  constructor() { }

  ngOnInit(): void {
  }

}
