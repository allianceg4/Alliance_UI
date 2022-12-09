import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { SalesTicketElement } from 'src/app/models/sales_tickets.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
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
