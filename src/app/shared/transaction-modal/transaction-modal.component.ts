import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SalesTicketElement } from 'src/app/models/sales_tickets.model';
import { SuccessfulDialogComponent } from '../successful-dialog/successful-dialog.component';
import { TransactionElement } from 'src/app/models/transactions.model';
@Component({
  selector: 'app-transaction-modal',
  templateUrl: './transaction-modal.component.html',
  styleUrls: ['./transaction-modal.component.css'],
})
export class TransactionModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<TransactionModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TransactionElement
  ) {}

  ngOnInit(): void {}
}
