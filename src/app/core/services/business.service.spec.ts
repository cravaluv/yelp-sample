import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';


import { BusinessService } from './business.service';
import { HttpClientModule } from '@angular/common/http';

describe('BusinessService', () => {
    let service: BusinessService;
    let httpMock: HttpTestingController;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ HttpClientTestingModule],
            providers: [BusinessService, HttpClientModule]
        });
        service = TestBed.get(BusinessService);
        httpMock = TestBed.get(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('be able to retrieve business reviews from the API', () => {
        const id = 'WwLi7ImP0bj6_dHECea5Nw';
        const exampleReviews = {
            reviews: [
                {
                    id: 'Hcr3kjjS6kCrM_1Jc-FAcQ',
                    url: 'https://www.yelp.com/biz/dobra-bu%C5%82a-warszawa?adjust_creative=QIta4g4-1fciUDzJg7Ug3A&hrid=Hcr3kjjS6kCrM_1Jc-FAcQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=QIta4g4-1fciUDzJg7Ug3A',
                    text: 'Nine of us were here during an exercise nearby. A lot of places would have been overwhelmed with a crowd like that showing up at one time, but the staff was...',
                    rating: 5,
                    time_created: '2018-11-26 04:10:02',
                    user: {
                        id: 'Shj_NOb3Hf-KU4qhquk6Iw',
                        profile_url: 'https://www.yelp.com/user_details?userid=Shj_NOb3Hf-KU4qhquk6Iw',
                        image_url: null,
                        name: 'John G.'
                    }
                }
            ],
            total: 2,
            possible_languages: [
                'en',
                'pl'
            ]
        };
        service.getBusinessReviewsByBusinessId(id).subscribe((data: any) => {
            expect(data.total).toBe(2);
            expect(data).toEqual(exampleReviews);
            expect(data.possible_languages).toContain('en')
        });
        const request = httpMock.expectOne(`${service.apiUrl}WwLi7ImP0bj6_dHECea5Nw/reviews`);
        expect(request.request.method).toBe('GET');
        request.flush(exampleReviews);
    });
})