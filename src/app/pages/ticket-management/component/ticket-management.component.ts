import { Component } from '@angular/core';
import { TicketElement } from 'src/app/models/ticket.model';
import { MatDialog } from '@angular/material/dialog';
import { AddTicketFormComponent } from '../../../shared/add-ticket-form/add-ticket-form.component';
import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { EditComponent } from 'src/app/edit/edit.component';
import { Router } from '@angular/router';

const ELEMENT_DATA: TicketElement[] = [
  {
    id: 101,
    datefile: '02/11/22',
    status: 'Available',
    subject: 'Recruit Report',
    description: 'Report for Recruit',
    servicecharge: 20.00,
    btn1: 'edit',
    btn2: 'delete',
  },
  {
    id: 201,
    datefile: '05/23/22',
    status: 'Unavailable',
    subject: 'Sales Report',
    description: 'Report for Sales',
    servicecharge: 25.00,
    btn1: 'edit',
    btn2: 'delete',
  },
  {
    id: 301,
    datefile: '01/02/22',
    status: 'Available',
    subject: 'HR Report',
    description: 'Report for HR',
    servicecharge: 25.00,
    btn1: 'edit',
    btn2: 'delete',
  },
  {
    id: 401,
    datefile: '12/23/22',
    status: 'Unavailable',
    subject: 'Finance Report',
    description: 'Report for Finance',
    servicecharge: 20.00,
    btn1: 'edit',
    btn2: 'delete',
  },
  {
    id: 501,
    datefile: '11/07/22',
    status: 'Available',
    subject: 'Storage Report',
    description: 'Report for Storage',
    servicecharge: 25.00,
    btn1: 'edit',
    btn2: 'delete',
  },
];

@Component({
  selector: 'app-ticket-management',
  templateUrl: './ticket-management.component.html',
  styleUrls: ['./ticket-management.component.css'],
})
export class TicketManagementComponent {

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

  constructor(private addDialog: MatDialog, public dialog: Dialog, public router:Router) {}

  onAddTicket() {
    this.addDialog.open(AddTicketFormComponent);
  }

  removeRow(id: number) {
    this.dataSource = this.dataSource.filter((u) => u.id !== id);
  }

  editRow(id: number) {
    this.dataSource = this.dataSource.filter((u) => {
      if(u.id == id){
      }
      return true;
    });
  }

  openEditDialog(): void {
    this.dialog.open<string>(EditComponent);
    console.log('edit working');
  }

  tempbtn(){
    this.router.navigate(['billing']);
  }

  tempbtnCollect() {
    this.router.navigate(['collection']);
    }
}
