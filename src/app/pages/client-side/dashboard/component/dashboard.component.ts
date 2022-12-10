import { Component, OnInit } from '@angular/core';
import { SalesTicketElement } from 'src/app/models/sales_tickets.model';
import { MatDialog } from '@angular/material/dialog';
import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { ConformSlipComponent } from '../../../../shared/conform-slip/conform-slip.component';
import { UploadFormComponent } from 'src/app/shared/upload-form/upload-form.component';
import { HttpClient } from '@angular/common/http';
import { ModalDescriptionComponent } from '../../modal-description/modal-description.component';
import { first, map, Observable } from 'rxjs';
import { TicketService } from 'src/app/ticket.service';
import { TicketElement } from 'src/app/models/ticket.model';


// const ELEMENT_DATA: SalesTicketElement[] = [
//   {
//     id: 101,
//     datefile: '02/11/22',
//     status: 'Available',
//     subject: 'Recruit Report',
//     description: 'Report for Recruit',
//     servicecharge: 20.00,
//   },
//   {
//     id: 201,
//     datefile: '05/23/22',
//     status: 'Unavailable',
//     subject: 'Sales Report',
//     description: 'Report for Sales',
//     servicecharge: 25.00,
//   },
//   {
//     id: 301,
//     datefile: '01/02/22',
//     status: 'Available',
//     subject: 'HR Report',
//     description: 'Report for HR',
//     servicecharge: 25.00,
//   },
//   {
//     id: 401,
//     datefile: '12/23/22',
//     status: 'Unavailable',
//     subject: 'Finance Report',
//     description: 'Report for Finance',
//     servicecharge: 20.00,
//   },
//   {
//     id: 501,
//     datefile: '11/07/22',
//     status: 'Available',
//     subject: 'Storage Report',
//     description: 'Report for Storage',
//     servicecharge: 25.00,
//   },
// ];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  ELEMENT_DATA: SalesTicketElement[] = [];

  displayedColumns: string[] = [
    'id',
    'datefile',
    'status',
    'subject',
    'description',
    'servicecharge',
    'btn',
  ];

  dataSource: SalesTicketElement[] = [];

  constructor(
    private addDialog: MatDialog, 
    public dialog: Dialog, 
    private http: HttpClient,
    private ticketService: TicketService) {}

  onCreateConformSlip() {
    this.addDialog.open(ConformSlipComponent);
  }

  onUpload() {
    this.addDialog.open(UploadFormComponent);
  }

  showDescription() {
    this.addDialog.open(ModalDescriptionComponent);
  }

  ngOnInit(): void {
    this.ticketService.getTickets().subscribe((data: any) => {
      data.data.forEach((ticket:any) => {
        let newElement: SalesTicketElement = {
          id: ticket.ticketID,
          datefile: ticket.date,
          status: ticket.statusID,
          subject: ticket.subject,
          description: ticket.description,
          servicecharge: ticket.amount,
        };
        this.ELEMENT_DATA.push(newElement);
      })
      this.dataSource = this.ELEMENT_DATA;
    })
  }

}
