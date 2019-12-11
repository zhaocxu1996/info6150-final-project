import { User } from './../../users/user.model';
import { UserService } from './../../users/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  username: string;
  password: string;
  loginFailed = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  register() {
    this.router.navigate(['register']);
  }

  login() {
    this.userService.getUserByUsername(this.username).subscribe(data => {
      if (data.length !== 0 && data[0].password === this.password) {
        this.user = data[0];
        this.userService.setUser(this.user);
        console.log(this.user);
        this.router.navigate(['welcome']);
      } else {
        this.username = '';
        this.password = '';
        this.loginFailed = true;
      }
    });
  }
}
