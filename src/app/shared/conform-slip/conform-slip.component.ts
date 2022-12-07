import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SalesTicketElement } from 'src/app/models/sales_tickets.model';
import { ConformElement } from 'src/app/models/conform.model';

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
  selector: 'app-conform-slip',
  templateUrl: './conform-slip.component.html',
})
export class ConformSlipComponent {
  constructor(
    public dialogRef: MatDialogRef<ConformSlipComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConformElement
  ) {}

  ngOnInit(): void {}
}
