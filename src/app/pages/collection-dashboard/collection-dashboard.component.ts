import { Component, OnInit } from '@angular/core';
import { BillingTicketElement } from 'src/app/models/sales_tickets.model';
import { MatDialog } from '@angular/material/dialog';
import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { BillingFormComponent } from '../../shared/billing-form/billing-form.component';
import { ApproveComponent } from 'src/app/approve/approve.component';
import { EditComponent } from 'src/app/edit/edit.component';


const ELEMENT_DATA: BillingTicketElement[] = [
  {
    id: 101,
    status: 'Closed',
    subject: 'Sales Report',
    description: 'Report for Sales',
    date: 2022-12-2,
    serviceCharge: 100,
  },
  {
    id: 102,
    status: 'Closed',
    subject: 'Sales Report',
    description: 'Report for Sales',
    date: 2022-12-2,
    serviceCharge: 150,
  },
  {
    id: 103,
    status: 'Closed',
    subject: 'Finance Report',
    description: 'Report for Finance',
    date: 2022-12-2,
    serviceCharge: 100,
  },
  {
    id: 501,
    status: 'Closed',
    subject: 'Storage Report',
    description: 'Report for Storage',
    date: 2022-12-2,
    serviceCharge: 100,
  },
];

@Component({
  selector: 'app-collection-dashboard',
  templateUrl: './collection-dashboard.component.html',
  styleUrls: ['./collection-dashboard.component.css']
})
export class CollectionDashboardComponent implements OnInit {

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
    this.addDialog.open(BillingFormComponent);
  }

  ngOnInit(): void {
  }

  removeRow(id: number) {
    this.dataSource = this.dataSource.filter((u) => u.id !== id);
  }

  onUpload() {
    this.addDialog.open(ApproveComponent);
  }

}
