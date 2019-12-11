import { UserService } from './../users/user.service';
import { User } from './../users/user.model';
import { Component, OnInit } from '@angular/core';

import { ProductService } from '../products/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../products/product.model';
@Component({
  selector: 'pm-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  id: number;
  vehicleName: string;
  year: number;
  releaseDate: string;
  price: number;
  product: IProduct | undefined;

  user: User;

  username: string;
  cardnum1: string;
  cardnum2: string;
  cardnum3: string;
  cardnum4: string;
  cvvcode: string;
  handlingfees = 3;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.user = this.userService.getUser();
    if (this.user === undefined) {
      console.log('undefined');
      this.router.navigate(['login']);
    }

    this.id = Number(this.route.snapshot.paramMap.get("id"));
    console.log(`现在的id是${this.id}`);

    this.productService.getProduct(this.id).subscribe(data => {
      console.log(data);
      this.product = data;
      this.price = data.price;
      this.year = data.year;
      this.vehicleName = data.vehicleName;
      this.releaseDate = data.releaseDate;
    });
  }
  onClickPlaceOrder() {
    if (
      this.username === '' ||
      this.username === null ||
      this.username === undefined
    ) {
      alert('Please provide name.');
      return;
    }
    if (
      this.cardnum1 === "" ||
      this.cardnum1 === null ||
      this.cardnum1 === undefined
    ) {
      alert("Please card complete num.");
      return;
    }

    if (
      this.cardnum2 === "" ||
      this.cardnum2 === null ||
      this.cardnum2 === undefined
    ) {
      alert("Please card complete num.");
      return;
    }

    if (
      this.cardnum3 === "" ||
      this.cardnum3 === null ||
      this.cardnum3 === undefined
    ) {
      alert("Please card complete num.");
      return;
    }
    if (
      this.cvvcode === "" ||
      this.cvvcode === null ||
      this.cvvcode === undefined
    ) {
      alert("Please card security code.");
      return;
    }
    this.productService.sellProduct(this.id);
    alert("Order is being placed");
  }
}
