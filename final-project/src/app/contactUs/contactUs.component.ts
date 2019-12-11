import { Component } from '@angular/core';
import { User } from '../users/user.model';
import { UserService } from '../users/user.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './contactUs.component.html',
  styleUrls: ['./contactUs.component.css']
})
export class contactUsComponent {

  user: User;
  public pageTitle = 'contactUs';

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    if (this.userService.getUser() === undefined) {
      this.router.navigate(['login']);
    } else {
      this.user = this.userService.getUser();
    }
  }
}
