import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { SalesTicketElement } from 'src/app/models/sales_tickets.model';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { ConformSlipComponent } from '../../shared/conform-slip/conform-slip.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface DialogData {
  assignee: string;
  subject: string;
  description: string;
}

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
    assignee: 'Jorj Bugwak',
    status: 'Available',
    subject: 'Storage Report',
    description: 'Report for Storage',
    tracker: 'MA43',
  },
];

@Component({
  selector: 'app-customer-issues-dashboard',
  templateUrl: './customer-issues.component.html',
  styleUrls: ['./customer-issues.component.css'],
})
export class CustomerIssuesComponent {
  assignee;
  subject;
  description;
  id;
  selectedRow;

  displayedColumns: string[] = [
    'id',
    'assignee',
    'status',
    'subject',
    'description',
    'tracker',
    'btn',
  ];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  clickedRows = new Set<SalesTicketElement>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
  }

  constructor(private addDialog: MatDialog) {}

  extractData(row) {
    console.log(row);
    this.selectedRow = row;
  }

  removeRow(id: number) {
    this.dataSource.data = this.dataSource.data.filter((u) => u.id !== id);
  }

  onCreateConformSlip() {
    this.addDialog.open(ConformSlipComponent, {
      data: {
        assignee: this.selectedRow.assignee,
        subject: this.selectedRow.subject,
        description: this.selectedRow.description,
        id: this.selectedRow.id,
      },
    });

    this.addDialog.afterAllClosed.subscribe((result) => {
      console.log('closed');
      this.selectedRow = null;
    });
  }

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
