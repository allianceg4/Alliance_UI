import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { AppRoutingModule } from './shared/app-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AngularMaterialModule } from './shared/angular-material.module';
import { SharedModule } from './shared/shared.module';
import { AddTicketFormComponent } from './shared/add-ticket-form/add-ticket-form.component';
import { EditComponent } from './shared/edit/edit.component';
import { SalesDashboardComponent } from './pages/sales-dashboard/component/sales-dashboard.component';
import { ConformSlipComponent } from './shared/conform-slip/conform-slip.component';
import { BillingDashboardComponent } from './pages/billing-dashboard/billing-dashboard.component';
import { BillingFormComponent } from './shared/billing-form/billing-form.component';

import { CollectionDashboardComponent } from './pages/collection-dashboard/collection-dashboard.component';
import { ApproveComponent } from './shared/approve/approve.component';
import { UploadFormComponent } from './shared/upload-form/upload-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubmitComponent } from './submit/submit.component';
import { TreasuryDashboardComponent } from './pages/treasury-dashboard/treasury-dashboard.component';
import { FileIssueComponent } from './shared/file-issue/file-issue.component';


const materialModules = [
  MatExpansionModule,
  MatIconModule,
  MatListModule,
  MatSelectModule,
  MatListModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatTabsModule,
  MatDatepickerModule,
  MatNativeDateModule,
];

@NgModule({
  declarations: [
    AppComponent,
    AddTicketFormComponent,
    EditComponent,
    SalesDashboardComponent,
    ConformSlipComponent,
    BillingDashboardComponent,
    BillingFormComponent,
    CollectionDashboardComponent,
    ApproveComponent,
    UploadFormComponent,
    SubmitComponent,
    TreasuryDashboardComponent,
    FileIssueComponent
  ],

  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    materialModules,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
