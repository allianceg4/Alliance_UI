import { Component, OnInit } from '@angular/core';
import { SalesTicketElement } from 'src/app/models/sales_tickets.model';
import { MatDialog } from '@angular/material/dialog';
import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { AddTicketFormComponent } from '../../../shared/add-ticket-form/add-ticket-form.component';
import { ConformSlipComponent } from '../../../shared/conform-slip/conform-slip.component';

const ELEMENT_DATA: SalesTicketElement[] = [
  {
    id: 101,
    datefile: '02/11/22',
    status: 'Available',
    subject: 'Recruit Report',
    description: 'Report for Recruit',
    servicecharge: 20.00,
  },
  {
    id: 201,
    datefile: '05/23/22',
    status: 'Unavailable',
    subject: 'Sales Report',
    description: 'Report for Sales',
    servicecharge: 25.00,
  },
  {
    id: 301,
    datefile: '01/02/22',
    status: 'Available',
    subject: 'HR Report',
    description: 'Report for HR',
    servicecharge: 25.00,
  },
  {
    id: 401,
    datefile: '12/23/22',
    status: 'Unavailable',
    subject: 'Finance Report',
    description: 'Report for Finance',
    servicecharge: 20.00,
  },
  {
    id: 501,
    datefile: '11/07/22',
    status: 'Available',
    subject: 'Storage Report',
    description: 'Report for Storage',
    servicecharge: 25.00,
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
