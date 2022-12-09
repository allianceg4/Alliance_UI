import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from 'src/app/shared/angular-material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TreasuryDashboardComponent } from './treasury-dashboard.component';

const routes = [
  {
    path: '',
    component: TreasuryDashboardComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FlexLayoutModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
})
export class TreasuryModule { }
