import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BusinessPage } from './business.page';
import { BusinessPageRoutingModule } from './business-routing.module';
import { BusinessListComponent } from './pages/business-list/business-list.component';
import { BusinessCardComponent } from './components/business-card/business-card.component';
import { BusinessReviewComponent } from './components/business-review/business-review.component';
import { BusinessFilterModal } from './components/business-filter/business-filter.modal';
import { ReviewListComponent } from './pages/review-list/review-list.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    BusinessPageRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [BusinessPage, BusinessListComponent, BusinessCardComponent, BusinessReviewComponent, BusinessFilterModal, ReviewListComponent],
  entryComponents: [BusinessFilterModal]
})
export class BusinessPageModule {}
