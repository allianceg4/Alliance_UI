import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { SalesTicketElement } from 'src/app/models/sales_tickets.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
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
    servicecharge: 20.0,
  },
  {
    id: 201,
    datefile: '05/23/22',
    status: 'Unavailable',
    subject: 'Sales Report',
    description: 'Report for Sales',
    servicecharge: 25.0,
  },
  {
    id: 301,
    datefile: '01/02/22',
    status: 'Available',
    subject: 'HR Report',
    description: 'Report for HR',
    servicecharge: 25.0,
  },
  {
    id: 401,
    datefile: '12/23/22',
    status: 'Unavailable',
    subject: 'Finance Report',
    description: 'Report for Finance',
    servicecharge: 20.0,
  },
  {
    id: 501,
    datefile: '11/07/22',
    status: 'Available',
    subject: 'Storage Report',
    description: 'Report for Storage',
    servicecharge: 25.0,
  },
];

@Component({
  selector: 'app-sales-dashboard',
  templateUrl: './sales-dashboard.component.html',
  styleUrls: ['./sales-dashboard.component.css'],
})
export class SalesDashboardComponent {
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  clickedRows = new Set<SalesTicketElement>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  // ngAfterViewInit() {
  //   this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  //   this.dataSource.paginator = this.paginator;
  // }

  // constructor(private addDialog: MatDialog) {}

  // extractData(row) {
  //   console.log(row);
  //   this.selectedRow = row;
  // }

  // removeRow(id: number) {
  //   this.dataSource.data = this.dataSource.data.filter((u) => u.id !== id);
  // }

  // onCreateConformSlip() {
  //   this.addDialog.open(ConformSlipComponent, {
  //     data: {
  //       assignee: this.selectedRow.assignee,
  //       subject: this.selectedRow.subject,
  //       description: this.selectedRow.description,
  //       id: this.selectedRow.id,
  //     },
  //   });

  //   this.addDialog.afterAllClosed.subscribe((result) => {
  //     console.log('closed');
  //     this.selectedRow = null;
  //   });
  // }

  // onClosingTransaction() {
  //   this.addDialog.open(TransactionModalComponent, {
  //     data: {
  //       assignee: this.selectedRow.assignee,
  //       subject: this.selectedRow.subject,
  //       description: this.selectedRow.description,
  //       id: this.selectedRow.id,
  //     },
  //   });

  //   this.addDialog.afterAllClosed.subscribe((result) => {
  //     console.log('closed');
  //     this.selectedRow = null;
  //   });
  // }

  ngOnInit(): void {}
}
