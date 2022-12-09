import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, Validators, VERSION } from '@angular/forms';
import { SalesTicketElement } from 'src/app/models/sales_tickets.model';
import { SubmitComponent } from 'src/app/submit/submit.component';

const ELEMENT_DATA: SalesTicketElement[] = [
  {
    id: 101,
    assignee: 'Maria Uy',
    status: 'Available',
    subject: 'Recruit Report',
    description: 'Report for Recruit',
    tracker: 'AUD6',
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