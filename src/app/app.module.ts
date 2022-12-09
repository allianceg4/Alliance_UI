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
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppRoutingModule } from './shared/app-routing.module';
import { AngularMaterialModule } from './shared/angular-material.module';
import { SharedModule } from './shared/shared.module';
import { AddTicketFormComponent } from './shared/add-ticket-form/add-ticket-form.component';
import { EditComponent } from './edit/edit.component';
import { SalesDashboardComponent } from './pages/sales-dashboard/component/sales-dashboard.component';
import { CustomerIssuesComponent } from './pages/customer-issues/customer-issues.component';
import { ConformSlipComponent } from './shared/conform-slip/conform-slip.component';
import { BillingDashboardComponent } from './pages/billing-dashboard/billing-dashboard.component';
import { BillingFormComponent } from './shared/billing-form/billing-form.component';
import { TransactionFormComponent } from './pages/transaction-form/transaction-form.component';
import { TransactionModalComponent } from './shared/transaction-modal/transaction-modal.component';
import { CollectionDashboardComponent } from './pages/collection-dashboard/collection-dashboard.component';
import { ApproveComponent } from './approve/approve.component';
import { UploadFormComponent } from './shared/upload-form/upload-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LightboxModule } from 'ngx-lightbox';

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
  MatPaginatorModule,
  MatFormFieldModule,
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
    CustomerIssuesComponent,
    TransactionFormComponent,
    TransactionModalComponent,
  ],

  imports: [
    LightboxModule,
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
