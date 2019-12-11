import { User } from './../../users/user.model';
import { UserService } from './../../users/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

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

  constructor(private userService: UserService, private router: Router, private appComponent: AppComponent) { }

  ngOnInit() {
  }

  register() {
    this.router.navigate(['register']);
  }

  login() {
    this.userService.getUserByUsername(this.username).subscribe(data => {
      if (data.length !== 0 && data[0].password === this.password) {
        // if password and username matches, set User in the UserService for authentication
        this.user = data[0];
        this.userService.setUser(this.user);
        console.log(this.user);
        // log in succeed, redirect to home page
        this.router.navigate(['welcome']);
      } else {
        // if log in failed, clear the user input
        this.username = '';
        this.password = '';
        this.loginFailed = true;
      }
    });
  }
}
