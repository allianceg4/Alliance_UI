import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, Validators, VERSION } from '@angular/forms';
import { SalesTicketElement } from 'src/app/models/sales_tickets.model';
import { SubmitComponent } from 'src/app/submit/submit.component';

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
  selector: 'app-billing-form',
  templateUrl: './billing-form.component.html',
  styleUrls: ['./billing-form.component.css']
})
export class BillingFormComponent implements OnInit {
  constructor(public dialog: MatDialog) { }

  name = "Angular " + VERSION.major;
  display: FormControl = new FormControl("", Validators.required);
  file_store!: FileList;
  file_list: Array<string> = [];


  handleFileInputChange(l: FileList): void {
    this.file_store = l;
    if (l.length) {
      const f = l[0];
      const count = l.length > 1 ? `(+${l.length - 1} files)` : "";
      this.display.patchValue(`${f.name}${count}`);
    } else {
      this.display.patchValue("");
    }
  }


  sendDialog() {
    this.dialog.open(SubmitComponent);
  }
  ngOnInit(): void {

}
}