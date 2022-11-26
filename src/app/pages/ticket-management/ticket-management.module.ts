import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from 'src/app/shared/angular-material.module';
import { TicketManagementComponent } from './component/ticket-management.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { TicketDialogComponent } from './ticket-dialog/ticket-dialog.component';

const routes = [
  {
    path: '',
    component: TicketManagementComponent,
  },
];

@NgModule({
  declarations: [TicketManagementComponent, TicketDialogComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FlexLayoutModule,
    RouterModule.forChild(routes),
    SharedModule
  ],

})
export class TicketManagementModule { }
