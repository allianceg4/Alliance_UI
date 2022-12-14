import { Component, OnInit } from '@angular/core';
import { SalesTicketElement } from 'src/app/models/sales_tickets.model';
import { MatDialog } from '@angular/material/dialog';
import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { ConformSlipComponent } from '../../../../shared/conform-slip/conform-slip.component';
import { UploadFormComponent } from 'src/app/shared/upload-form/upload-form.component';
import { ModalDescriptionComponent } from '../../../../shared/modal-description/modal-description.component';
import { FileIssueComponent } from 'src/app/shared/file-issue/file-issue.component';

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
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  public nametoDisplay = 'Juan Dela Cruz';
  public roletoDisplay = 'User Client';


  displayedColumns: string[] = [
    'id',
    'datefile',
    'status',
    'subject',
    'description',
    'servicecharge',
    'btn',
  ];
  dataSource = ELEMENT_DATA;

  constructor(private addDialog: MatDialog, public dialog: Dialog) {}

  onFileIssue() {
    this.addDialog.open(FileIssueComponent);
  }

  onUpload() {
    this.addDialog.open(UploadFormComponent);
  }

  showDescription() {
    this.addDialog.open(ModalDescriptionComponent, {
      data:{
        subject: 'Recruit Report',
        description: 'To record things'
      }
    });
  }

  removeRow(id: number) {
    this.dataSource = this.dataSource.filter((u) => u.id !== id);
  }

  ngOnInit(): void {
  }

}
