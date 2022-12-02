import { Component } from '@angular/core';
import { TicketElement } from 'src/app/models/ticket.model';
import { MatDialog } from '@angular/material/dialog';
import { AddTicketFormComponent } from '../../../shared/add-ticket-form/add-ticket-form.component';
import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { TicketDialogComponent } from '../ticket-dialog/ticket-dialog.component';
import { EditComponent } from 'src/app/edit/edit.component';
 
const ELEMENT_DATA: TicketElement[] = [
  {
    id: 101,
    assignee: 'Maria Uy',
    status: 'Available',
    subject: 'Recruit Report',
    description: 'Report for Recruit',
    tracker: 'AUD6',
    btn1: 'edit',
    btn2: 'delete',
  },
  {
    id: 201,
    assignee: 'Jose Yep',
    status: 'Unavailable',
    subject: 'Sales Report',
    description: 'Report for Sales',
    tracker: '8WSA',
    btn1: 'edit',
    btn2: 'delete',
  },
  {
    id: 301,
    assignee: 'Miguel Tan',
    status: 'Available',
    subject: 'HR Report',
    description: 'Report for HR',
    tracker: 'NX5A',
    btn1: 'edit',
    btn2: 'delete',
  },
  {
    id: 401,
    assignee: 'Olivia Sue',
    status: 'Unavailable',
    subject: 'Finance Report',
    description: 'Report for Finance',
    tracker: '0Z4S',
    btn1: 'edit',
    btn2: 'delete',
  },
  {
    id: 501,
    assignee: 'Juan Cruz',
    status: 'Available',
    subject: 'Storage Report',
    description: 'Report for Storage',
    tracker: 'MA43',
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

  constructor(private addDialog: MatDialog, public dialog: Dialog) {}

  onAddTicket() {
    this.addDialog.open(AddTicketFormComponent);
  }

  //openDialog(): void {
    //this.dialog.open<string>(TicketDialogComponent);
    //console.log('delete working');
  //}

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
  
}
