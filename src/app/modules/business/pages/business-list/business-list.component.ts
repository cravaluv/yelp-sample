import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BusinessFilterModal } from '../../components/business-filter/business-filter.modal';
import { ModalController, AlertController } from '@ionic/angular';
import { GeolocationService } from 'src/app/shared/utils/geolocation.service';
import { SearchBusiness } from 'src/app/core/models/search-business.model';
import { BusinessService } from 'src/app/core/services/business.service';
import { BusinessFormFilter } from 'src/app/core/models/business-form-filter.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.scss'],
})
export class BusinessListComponent implements OnInit {

  constructor(public modalController: ModalController, private geolocationService: GeolocationService, private businessService: BusinessService,
    private alertController: AlertController, private router: Router) { }

  ngOnInit() { }

  hiddenFilters = false;

  additionalFilters = new BusinessFormFilter();

  searchBusiness = new SearchBusiness();

  businessList = [];

  isFirstLoad = true;

  totalBusinesses = 0;

  async presentModal() {
    const modal = await this.modalController.create({
      component: BusinessFilterModal,
      componentProps: {
        filterModel: this.additionalFilters
      }
    });

    modal.onDidDismiss().then(data => {
      this.additionalFilters = data.data;
      this.businessList = [];
    });

    return await modal.present();
  }

  async clickedSearch() {
    if ((this.searchBusiness.latitude && this.searchBusiness.longitude) || this.searchBusiness.location) {
      this.hiddenFilters = true;
      if (this.additionalFilters) {
        this.searchBusiness.applyFormValue(this.additionalFilters);
      }
      this.businessList = [];
      this.getBusiness();
    } else {
      const alert = await this.alertController.create({
        message: 'You need to pick up location to search',
        buttons: ['Okay']
      });

      await alert.present()
    }
  }

  showFilters() {
    this.hiddenFilters = false;
  }

  getGeolocation() {
    this.searchBusiness.location = 'User location'
    this.geolocationService.getGeoLocation().then((data) => {
      this.searchBusiness.latitude = data.coords.latitude + '';
      this.searchBusiness.longitude = data.coords.longitude + '';
    })
  }

  getBusiness(event = undefined) {

    if (!this.isFirstLoad) {
      this.searchBusiness.offset += 20;
    } else {
      this.isFirstLoad = false;
    }

    this.businessService.searchBusiness(this.searchBusiness).subscribe((item: any) => {
      for (let i = 0; i < item.businesses.length; i++) {
        this.businessList.push(item.businesses[i]);
      }
      this.totalBusinesses = item.total;

      if (event)
          event.target.complete();
    })

  }

  doInfinite(event) {
    if (this.totalBusinesses > this.searchBusiness.offset) {
      this.getBusiness(event);
      event.target.complete();
    } else {
        event.target.disabled = true;
    }
  }

  onBusinessClick(id: string) {
    this.router.navigate(['/business',  id])
  }
}
