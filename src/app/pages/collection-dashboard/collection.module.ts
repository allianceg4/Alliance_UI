import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionDashboardComponent } from '../collection-dashboard/collection-dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from 'src/app/shared/angular-material.module';
import { SharedModule } from 'src/app/shared/shared.module';

const routes = [
  {
    path: '',
    component: CollectionDashboardComponent,
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
export class CollectionModule { }
