import { Component, OnInit } from '@angular/core';
import { SalesTicketElement } from 'src/app/models/sales_tickets.model';
import { MatDialog } from '@angular/material/dialog';
import { Dialog } from '@angular/cdk/dialog';
import { ConformSlipComponent } from '../../../../shared/conform-slip/conform-slip.component';
import { UploadFormComponent } from 'src/app/shared/upload-form/upload-form.component';
import { HttpClient } from '@angular/common/http';
import { ModalDescriptionComponent } from '../../modal-description/modal-description.component';
import { TicketService } from 'src/app/ticket.service';

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
    // this.ticketService.getTickets().subscribe((data: any) => {
    //   data.data.forEach((ticket:any) => {
    //     let newElement: SalesTicketElement = {
    //       id: ticket.ticketID,
    //       datefile: ticket.date,
    //       status: ticket.statusID,
    //       subject: ticket.subject,
    //       description: ticket.description,
    //       servicecharge: ticket.amount,
    //     };
    //     this.ELEMENT_DATA.push(newElement);
    //   })
    //   this.dataSource = this.ELEMENT_DATA;
    // })

    this.ticketService.saveTicket().subscribe(result => {
      console.log(result);
    })
  }
}
