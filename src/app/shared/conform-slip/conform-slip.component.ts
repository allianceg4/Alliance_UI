import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SalesTicketElement } from 'src/app/models/sales_tickets.model';
import { SuccessfulDialogComponent } from '../successful-dialog/successful-dialog.component';
import { TicketElement } from 'src/app/models/ticket.model';

@Component({
  selector: 'app-conform-slip',
  templateUrl: './conform-slip.component.html',
  styleUrls: ['./conform-slip.component.css'],
})
export class ConformSlipComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<ConformSlipComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TicketElement
  ) {}

  sendDialog() {
    this.dialog.open(SuccessfulDialogComponent);
    console.log('open');
  }

  ngOnInit(): void {}
}
