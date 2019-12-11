import { User } from './user.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;

  private remoteUrlPattern = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  public getAllUsers(): Observable<Array<User>> {
    const users$ = this.http.get<User[]>(this.remoteUrlPattern);
    return users$;
  }

  public getUserById(id: number): Observable<Array<User>> {
    const users$ = this.http.get<User[]>(this.remoteUrlPattern + `${id}`);
    return users$;
  }

  public getUserByUsername(username: string): Observable<Array<User>> {
    const users$ = this.http.get<User[]>(this.remoteUrlPattern + `/${username}`);
    return users$;
  }

  public setUser(user: User) {
    this.user = user;
  }

  public getUser(): User {
    if (this.user === undefined || this.user == null) {
      return undefined;
    } else {
      return this.user;
    }
  }

  public logout() {
    this.user = undefined;
    console.log(this.user);
  }

  public saveNewUser(user: Object): Observable<User> {
    console.log(user);
    const user$ = this.http.post<User>(this.remoteUrlPattern, user);
    return user$;
  }

  public updateUser(id: number, user: Object): Observable<User> {
    const user$ = this.http.put<User>(this.remoteUrlPattern + `/${id}`, (user));
    // const user$ = this.http.put<User>('http://localhost:3000/users/5deef0d6f92043771a441c99', user);
    return user$;
  }
}
