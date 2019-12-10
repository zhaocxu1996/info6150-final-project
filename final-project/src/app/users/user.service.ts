import { User } from './user.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private remoteUrlPattern = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  public getAllUsers(): Observable<Array<User>> {
    const users$ = this.http.get<User[]>(this.remoteUrlPattern);
    return users$;
  }

  public getUserByUsername(username: string): Observable<Array<User>> {
    const user$ = this.http.get<User[]>(this.remoteUrlPattern + `/${username}`);
    return user$;
  }

  public saveNewUser(user: Object): Observable<User> {
    const user$ = this.http.post<User>(this.remoteUrlPattern, user);
    return user$;
  }

  public updateUser(user: User): Observable<User> {
    const user$ = this.http.put<User>(this.remoteUrlPattern + `/${user.id}`, user);
    return user$;
  }
}
