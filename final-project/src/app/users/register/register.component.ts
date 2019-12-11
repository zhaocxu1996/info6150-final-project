import { UserService } from './../../users/user.service';
import { User } from './../../users/user.model';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pm-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string;
  password: string;
  contact: string;
  address: string;
  email: string;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  register() {
    console.log(this.username);
    let user = {
      'username': this.username,
      'password': this.password,
      'contact': this.contact,
      'address': this.address,
      'email': this.email
    };
    console.log(user);
    this.userService.saveNewUser(user).subscribe(data => {
      console.log(data);
      this.router.navigate(['login']);
    });
  }

}
