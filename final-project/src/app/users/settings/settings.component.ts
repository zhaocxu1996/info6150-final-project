import { Component, Input } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../user.model';


@Component({
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingComponent {

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
    // this.userService.saveNewUser(this.user);
    this.userService.updateUser(this.user).subscribe(data => {
      console.log(data);
      alert('Update Success!');
    })
  }
}
