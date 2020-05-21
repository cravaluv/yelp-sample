import { Component, OnInit, Input } from '@angular/core';
import { BusinessReview } from 'src/app/core/models/business-review.model';

@Component({
  selector: 'app-business-review',
  templateUrl: './business-review.component.html',
  styleUrls: ['./business-review.component.scss'],
})
export class BusinessReviewComponent implements OnInit {

  /*
    I've noticed that yelp sample API responses with up to three reviews. That's why some businesses have many reviews but some of them are not shown.
    Reference: https://www.yelp.com/developers/documentation/v3/business_reviews
    'reviews	object[]	A list of up to three reviews of this business.'
  **/

  @Input()
  review: BusinessReview = new BusinessReview;

  constructor() { }

  ngOnInit() {}

}
