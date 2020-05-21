import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DetailedBusinessModel } from '../models/detailed-business.model';
import { SearchBusiness } from '../models/search-business.model';
import { BusinessReview } from '../models/business-review.model';
import * as _ from 'lodash';


@Injectable({
  providedIn: 'root',
})
export class BusinessService {

  apiUrl = 'http://api.yelp.com/v3/businesses/';

  constructor(private http: HttpClient) { }

  public getBusinessReviewsByBusinessId(id: string) {
    return this.http.get(this.apiUrl + id + '/reviews')
  }

  public searchBusiness(searchModel: SearchBusiness) {
    var search = _.clone(searchModel);

    for (var propName in search) { 
      if (search[propName] === null || search[propName] === undefined || search[propName] === '') {
        delete search[propName];
      }
    }

    if (search.longitude && search.latitude)
      delete search.location;
    if (search.sort_by === 'default')
      delete search.sort_by;
    if (search.radius === 'default')
      delete search.radius;
    if (search.open_now === 'false')
      delete search.open_now;

    return this.http.get(this.apiUrl + 'search', {params: search as any});
  }

}