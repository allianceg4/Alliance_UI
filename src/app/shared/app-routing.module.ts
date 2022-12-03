import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'client-side',
    loadChildren: () => import('../pages/client-side/dashboard/dashboard.module').then(m => m.DashboardModule)
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
