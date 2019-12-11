import { Component, OnInit } from '@angular/core';
import { UserService } from './users/user.service';
import { Router } from '@angular/router';
import { User } from './users/user.model';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  pageTitle = 'GOODLIFE';

  user: User;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.user = this.userService.getUser();
  }

  setUser(user: User){
    this.user = user;
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['welcome']);
  }
}
