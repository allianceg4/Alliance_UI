import { Component, OnInit } from '@angular/core';
import {Dialog, DialogRef} from '@angular/cdk/dialog';

@Component({
  selector: 'app-ticket-dialog',
  templateUrl: './ticket-dialog.component.html',
  styleUrls: ['./ticket-dialog.component.css']
})
export class TicketDialogComponent {

  constructor(public dialogRef: DialogRef) { }

}
