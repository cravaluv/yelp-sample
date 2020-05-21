import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusinessService } from 'src/app/core/services/business.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss'],
})
export class ReviewListComponent implements OnInit, OnDestroy {

  id: string;

  params;

  reviews = [];

  reviewsLoaded = false; 

  constructor(private route: ActivatedRoute, private businessService: BusinessService, private navController: NavController) {

  }

  ngOnInit() {
    this.params = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.businessService.getBusinessReviewsByBusinessId(this.id).subscribe((data: any) => {
        this.reviews = data.reviews;
        this.reviewsLoaded = true;
      })
    })
}

ngOnDestroy() {
  this.params.unsubscribe();
}

goBack() {
  this.navController.back();
}

}
