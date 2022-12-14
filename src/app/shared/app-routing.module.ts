import { NgModule } from '@angular/core';
import {Router} from "@angular/router"
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'client-side',
    loadChildren: () => import('../pages/client-side/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'treasury',
    loadChildren: () => import('../pages/treasury-dashboard/treasury.module').then(m => m.TreasuryModule)
  },
  {
    path: 'billing',
    loadChildren: () => import('../pages/billing-dashboard/billing.module').then(m => m.BillingModule)
  },
  {
    path: 'collection',
    loadChildren: () => import('../pages/collection-dashboard/collection.module').then(m => m.CollectionModule)
  },
  {
    path: 'sales',
    loadChildren: () => import('../pages/sales-dashboard/sales.module').then(m => m.SalesModule)
  },
  {
    path: '',
    loadChildren: () => import('../pages/login-page/log-in.module').then(m => m.LogInModule)
  },
  {
    path: 'ticket-management',
    loadChildren: () => import('../pages/ticket-management/ticket-management.module').then(m => m.TicketManagementModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
