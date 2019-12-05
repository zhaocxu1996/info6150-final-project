import { Component, OnInit } from '@angular/core';
import { Car } from '../model/car';
import { CARS } from '../mock-cars';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {
 cars=CARS;
 selectedCar: Car;
  
  constructor() { }

  ngOnInit() {
  }
  
  onSelect(car: Car): void {
    this.selectedCar = car;
  }
}
