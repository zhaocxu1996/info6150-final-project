import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../users/user.service';
import { ProductService } from '../products/product.service';

@Component({
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']

})
export class WelcomeComponent {
  public pageTitle = 'Welcome';

  
  constructor(private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private productService: ProductService,
    ) {
}
  onContact(): void {
    this.router.navigate(['/contactUs']);
  }

  onList(): void {
    this.router.navigate(['/products']);
  }
  
}
