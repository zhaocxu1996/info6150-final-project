import { Component, OnInit } from '@angular/core';
import { Car } from '../checkout/car';
import { ProductService} from'../products/product.service';
import { ActivatedRoute, Router } from '@angular/router';

// import { carlist } from '../checkout/carlist';
@Component({
  selector: 'pm-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
   product:Car={
    "productId": 1,
    "productName": "BMW M4",
    "productCode": "2014",
    "releaseDate": "March 19, 2019",
    "description": "Leaf rake with 48-inch wooden handle.",
    "price": 19.95,
    "starRating": 3.2,
    "imageUrl": "assets/images/m4.jpg"
   }
   
   handlingfees = 3;
   constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService) {
     
}


  ngOnInit() {
    this.getDetail()
  }
  onClickPlaceOrder() {
    alert('Order is being placed');
  }
  getDetail(): void{
    const id = +this.route.snapshot.paramMap.get('');
    console.log(`现在的id是${id}`)
}
}
