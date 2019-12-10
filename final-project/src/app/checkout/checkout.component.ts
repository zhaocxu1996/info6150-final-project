import { Component, OnInit } from '@angular/core';

import { ProductService} from'../products/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CarsService } from './cars.service'
import { IProduct } from '../products/product'
@Component({
  selector: 'pm-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  productId: number;
  productName: string;
  productCode: string;
  releaseDate: string;
  price: number;
  description: string;
  starRating: number;
  imageUrl: string;
  product: IProduct | undefined;
   
   username: string;
   cardnum1:string;
   cardnum2:string;
   cardnum3:string;
   cardnum4:string;
   cvvcode:string;
   handlingfees = 3;
   constructor(private route: ActivatedRoute,
    private router: Router,
    private carsService: CarsService) {
     
}


  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(`现在的id是${id}`);
   
    this.carsService.getcarById(id).subscribe(data=>{
      this.product = data[0];
      console.log(data)
    });

    
  }
  onClickPlaceOrder() {
    if(this.username === "" || this.username === null || this.username === undefined)
    {
      alert("Please provide name.");
      return;
    }
    if(this.cardnum1 === "" || this.cardnum1 === null || this.cardnum1 === undefined)
    {
      alert("Please card complete num.");
      return;
    }

    if(this.cardnum2 === "" || this.cardnum2 === null || this.cardnum2 === undefined)
    {
      alert("Please card complete num.");
      return;
    }

    if(this.cardnum3 === "" || this.cardnum3 === null || this.cardnum3 === undefined)
    {
      alert("Please card complete num.");
      return;
    }
    if(this.cvvcode === "" || this.cvvcode === null || this.cvvcode === undefined)
    {
      alert("Please card security code.");
      return;
    }
    alert('Order is being placed');
  }
  getDetail(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(`现在的id是${id}`)
}
}
