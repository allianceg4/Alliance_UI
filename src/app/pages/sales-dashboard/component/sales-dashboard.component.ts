import { Component, OnInit } from '@angular/core';
import { SalesTicketElement } from 'src/app/models/sales_tickets.model';
import { MatDialog } from '@angular/material/dialog';
import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { AddTicketFormComponent } from '../../../shared/add-ticket-form/add-ticket-form.component';

const ELEMENT_DATA: SalesTicketElement[] = [
  {
    id: 101,
    assignee: 'Maria Uy',
    status: 'Available',
    subject: 'Recruit Report',
    description: 'Report for Recruit',
    tracker: 'AUD6',
    btn1: 'edit',
    btn2: 'delete',
  },
  {
    id: 201,
    assignee: 'Jose Yep',
    status: 'Unavailable',
    subject: 'Sales Report',
    description: 'Report for Sales',
    tracker: '8WSA',
    btn1: 'edit',
    btn2: 'delete',
  },
  {
    id: 301,
    assignee: 'Miguel Tan',
    status: 'Available',
    subject: 'HR Report',
    description: 'Report for HR',
    tracker: 'NX5A',
    btn1: 'edit',
    btn2: 'delete',
  },
  {
    id: 401,
    assignee: 'Olivia Sue',
    status: 'Unavailable',
    subject: 'Finance Report',
    description: 'Report for Finance',
    tracker: '0Z4S',
    btn1: 'edit',
    btn2: 'delete',
  },
  {
    id: 501,
    assignee: 'Juan Cruz',
    status: 'Available',
    subject: 'Storage Report',
    description: 'Report for Storage',
    tracker: 'MA43',
    btn1: 'edit',
    btn2: 'delete',
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

  onAddTicket() {
    this.addDialog.open(AddTicketFormComponent);
  }

  ngOnInit(): void {}
}
