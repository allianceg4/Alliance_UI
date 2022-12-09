import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SalesTicketElement } from 'src/app/models/sales_tickets.model';
import { SuccessfulDialogComponent } from '../successful-dialog/successful-dialog.component';

const ELEMENT_DATA: SalesTicketElement[] = [
  {
    id: 101,
    assignee: 'Maria Uy',
    status: 'Available',
    subject: 'Recruit Report',
    description: 'Report for Recruit',
    tracker: 'AUD6',
  },
];

@Component({
  selector: 'app-billing-form',
  templateUrl: './billing-form.component.html',
  styleUrls: ['./billing-form.component.css']
})
export class BillingFormComponent implements OnInit {
  constructor(public dialog: MatDialog) { }

  sendDialog() {
    this.dialog.open(SuccessfulDialogComponent);
    console.log("open");
  }

  ngOnInit(): void {
  }

}