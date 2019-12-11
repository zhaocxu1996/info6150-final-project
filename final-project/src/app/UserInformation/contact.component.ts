import { Component, Input } from '@angular/core';
import { UserService } from '../users/user.service';
import { Router } from '@angular/router';
import { User } from '../users/user.model';


@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  user: User;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    console.log(this.userService.getUser());
    if (this.userService.getUser() === undefined) {
      this.router.navigate(['login']);
    } else {
      this.user = this.userService.getUser();
    }
  }

  public pageTitle = 'Contact';


  update() {
    console.log(this.user);
    this.userService.updateUser(this.user);
  }
}
