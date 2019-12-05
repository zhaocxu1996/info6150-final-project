import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../model/car';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {
  @Input() car: Car;
  constructor() { }

  ngOnInit() {
  }

}
