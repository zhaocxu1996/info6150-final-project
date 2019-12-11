import { Contact } from './contact.model';
import { Component } from '@angular/core';
import { User } from '../users/user.model';
import { UserService } from '../users/user.service';
import { Router } from '@angular/router';
import { ContactService } from './contact.service';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  user: User;
  title = 'Mr';
  zip = '';
  comments = '';
  phone = '';
  email = '';
  firstName = '';
  lastName = '';
  options = '';
  hearFrom = 'google';

  public pageTitle = 'contactUs';

  constructor(private userService: UserService, private router: Router, private contactService: ContactService) { }

  ngOnInit() {
    if (this.userService.getUser() === undefined) {
      this.router.navigate(['login']);
    } else {
      this.user = this.userService.getUser();
    }
  }

  save() {
    let contact = {
      'title': this.title,
      'firstName': this.firstName,
      'lastName': this.lastName,
      'email': this.email,
      'phone': this.phone,
      'zip': this.zip,
      'options': this.options,
      'comments': this.comments,
      'hearFrom': this.hearFrom
    }
    this.contactService.save(contact).subscribe(data => {
      console.log(data);
      alert('Message has sent to the developer!');
      this.router.navigate(['welcome']);
    });
  }
}
