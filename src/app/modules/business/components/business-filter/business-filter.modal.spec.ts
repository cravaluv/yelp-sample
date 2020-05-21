import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BusinessFilterModal } from './business-filter.modal';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

describe('FilterMenuComponent', () => {
  let component: BusinessFilterModal;
  let fixture: ComponentFixture<BusinessFilterModal>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessFilterModal ],
      imports: [IonicModule.forRoot(), ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(BusinessFilterModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
