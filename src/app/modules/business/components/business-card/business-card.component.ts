import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DetailedBusinessModel } from 'src/app/core/models/detailed-business.model';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.scss'],
})
export class BusinessCardComponent implements OnInit {

  @Input()
  business: any;

  @Output() businessClick: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  businessClicked() {
    this.businessClick.emit(this.business.id);
  }

}
