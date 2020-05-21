import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessPage } from './business.page';
import { BusinessListComponent } from './pages/business-list/business-list.component';
import { ReviewListComponent } from './pages/review-list/review-list.component';

const routes: Routes = [
  {
    path: 'business',
    component: BusinessPage,
    children: [
      {
        path: 'business-list',
        component: BusinessListComponent
      },
      {
        path: '',
        redirectTo: '/business/business-list',
        pathMatch: 'full'
      },
      {
        path: ':id',
        component: ReviewListComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: '/business/business-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessPageRoutingModule {}
