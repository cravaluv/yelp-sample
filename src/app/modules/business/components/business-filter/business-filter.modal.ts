import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { SelectValue } from 'src/app/core/models/select-value.model';
import { BusinessFormFilter } from 'src/app/core/models/business-form-filter.model';
import * as _ from 'lodash';

@Component({
  selector: 'app-business-filter',
  templateUrl: './business-filter.modal.html',
  styleUrls: ['./business-filter.modal.scss'],
})
export class BusinessFilterModal implements OnInit {

  constructor(public modalController: ModalController, private formBuilder: FormBuilder) {
    this.buildForm();
  }

  @Input() filterModel: BusinessFormFilter;

  currentDateISO = new Date().toISOString();

  isSubmitted = false;

  openNowSet = false;

  openAtSet = false;

  prices: SelectValue[] = [
    {
      label: '$',
      value: 1
    },
    {
      label: '$$',
      value: 2
    },
    {
      label: '$$$',
      value: 3
    },
    {
      label: '$$$$',
      value: 4
    }
  ]

  distances: SelectValue[] = [
    {
      label: 'Any',
      value: 'default'
    },
    {
      label: '0.5 km',
      value: 500
    },
    {
      label: '1 km',
      value: 1000
    },
    {
      label: '5 km',
      value: 5000
    }
  ]

  sortOptions: SelectValue[] = [
    {
      label: 'Default',
      value: 'default'
    },
    {
      label: 'Best match',
      value: 'best_match'
    },
    {
      label: 'Rating',
      value: 'rating'
    },
    {
      label: 'Review count',
      value: 'review_count'
    },
    {
      label: 'Distance',
      value: 'distance'
    }
  ]

  filterForm: FormGroup;

  ngOnInit() {
    if (this.filterModel) {
      this.filterForm.patchValue(this.filterModel);
    }
    this.setDependencyValidation();
  }

  buildForm() {
    this.filterForm = this.formBuilder.group({
      price: new FormControl(''),
      distance: new FormControl('default', Validators.required),
      openNow: new FormControl(false),
      openAt: new FormControl(undefined),
      sortBy: new FormControl('default', Validators.required)
    });
  }

  setDependencyValidation() {
    this.filterForm.get('openNow').valueChanges.subscribe(category => {
      if (!this.openNowSet) {
        if (this.filterForm.get('openAt').value !== undefined) {
          this.openAtSet = true;
          this.filterForm.get('openAt').patchValue(undefined)
        }
      } else {
        this.openNowSet = false;
      }
    })

    this.filterForm.get('openAt').valueChanges.subscribe(category => {
      if (!this.openAtSet) {
        if (this.filterForm.get('openNow').value === true) {
          this.openNowSet = true;
          this.filterForm.get('openNow').patchValue(false)
        }
      } else {
        this.openAtSet = false;
      }
    })
  }


  onSubmit() {
    this.isSubmitted = true;
    if (!this.filterForm.valid) {
      return false;
    } else {
      this.modalController.dismiss(this.filterForm.value)
    }

  }

  dismissModal() {
    this.modalController.dismiss(this.filterModel);
  }

  clearFilters() {
    this.filterForm.reset();
    this.modalController.dismiss(this.filterForm.value)
  }



}
