import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { SalesTicketElement } from 'src/app/models/sales_tickets.model';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { TransactionModalComponent } from '../../shared/transaction-modal/transaction-modal.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TicketElement } from 'src/app/models/ticket.model';
import { TransactionElement } from 'src/app/models/transactions.model';

const ELEMENT_DATA: TransactionElement[] = [
  {
    id: 101,
    datefile: '02/11/22',
    status: 'Available',
    subject: 'Recruit Report',
    description: 'Report for Recruit',
    servicecharge: 20.0,
    btn1: 'edit',
    btn2: 'delete',
    fileURI: '../../../assets/block-section.pdf',
  },
  {
    id: 201,
    datefile: '05/23/22',
    status: 'Unavailable',
    subject: 'Sales Report',
    description: 'Report for Sales',
    servicecharge: 25.0,
    btn1: 'edit',
    btn2: 'delete',
    fileURI: '../../../assets/block-section.pdf',
  },
  {
    id: 301,
    datefile: '01/02/22',
    status: 'Available',
    subject: 'HR Report',
    description: 'Report for HR',
    servicecharge: 25.0,
    btn1: 'edit',
    btn2: 'delete',
    fileURI: '../../../assets/block-section.pdf',
  },
  {
    id: 401,
    datefile: '12/23/22',
    status: 'Unavailable',
    subject: 'Finance Report',
    description: 'Report for Finance',
    servicecharge: 20.0,
    btn1: 'edit',
    btn2: 'delete',
    fileURI: '../../../assets/block-section.pdf',
  },
  {
    id: 501,
    datefile: '11/07/22',
    status: 'Available',
    subject: 'Storage Report',
    description: 'Report for Storage',
    servicecharge: 25.0,
    btn1: 'edit',
    btn2: 'delete',
    fileURI: '../../../assets/block-section.pdf',
  },
];
@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css'],
})
export class TransactionFormComponent implements OnInit {
  subject;
  datefile;
  id;
  fileURI;
  selectedRow;

  displayedColumns: string[] = [
    'id',
    'datefile',
    'status',
    'subject',
    'description',
    'servicecharge',
    'btn',
  ];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  clickedRows = new Set<TicketElement>();

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

  onClosingTransaction() {
    this.addDialog.open(TransactionModalComponent, {
      data: {
        subject: this.selectedRow.subject,
        datefile: this.selectedRow.datefile,
        id: this.selectedRow.id,
        fileURI: this.selectedRow.fileURI,
      },
    });

    this.addDialog.afterAllClosed.subscribe((result) => {
      console.log('closed');
      this.selectedRow = null;
    });
  }

  ngOnInit(): void {}
}
