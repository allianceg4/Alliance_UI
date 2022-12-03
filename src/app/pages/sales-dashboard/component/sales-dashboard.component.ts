import { Component, OnInit } from '@angular/core';
import { SalesTicketElement } from 'src/app/models/sales_tickets.model';
import { MatDialog } from '@angular/material/dialog';
import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { AddTicketFormComponent } from '../../../shared/add-ticket-form/add-ticket-form.component';
import { ConformSlipComponent } from '../../../shared/conform-slip/conform-slip.component';

const ELEMENT_DATA: SalesTicketElement[] = [
  {
    id: 101,
    assignee: 'Maria Uy',
    status: 'Available',
    subject: 'Recruit Report',
    description: 'Report for Recruit',
    tracker: 'AUD6',
  },
  {
    id: 201,
    assignee: 'Jose Yep',
    status: 'Unavailable',
    subject: 'Sales Report',
    description: 'Report for Sales',
    tracker: '8WSA',
  },
  {
    id: 301,
    assignee: 'Miguel Tan',
    status: 'Available',
    subject: 'HR Report',
    description: 'Report for HR',
    tracker: 'NX5A',
  },
  {
    id: 401,
    assignee: 'Olivia Sue',
    status: 'Unavailable',
    subject: 'Finance Report',
    description: 'Report for Finance',
    tracker: '0Z4S',
  },
  {
    id: 501,
    assignee: 'Juan Cruz',
    status: 'Available',
    subject: 'Storage Report',
    description: 'Report for Storage',
    tracker: 'MA43',
  },
];

@Component({
  selector: 'app-sales-dashboard',
  templateUrl: './sales-dashboard.component.html',
  styleUrls: ['./sales-dashboard.component.css'],
})
export class SalesDashboardComponent {
  displayedColumns: string[] = [
    'id',
    'assignee',
    'status',
    'subject',
    'description',
    'tracker',
    'btn',
  ];
  dataSource = ELEMENT_DATA;

  constructor(private addDialog: MatDialog, public dialog: Dialog) {}

  onCreateConformSlip() {
    this.addDialog.open(ConformSlipComponent);
  }

  ngOnInit(): void {}
}