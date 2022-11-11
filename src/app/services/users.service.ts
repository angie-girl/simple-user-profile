import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { UserDto } from '../interfaces/user.interface';
import { IRequest } from '../interfaces/request';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUser(): Observable<UserDto> {
    return this.http.get<IRequest>(environment.api_url).pipe(map((res) => res.results));
  }

  // public show(userId: number): Observable<IUser> {
  //   return this.http.get<IRequest>(`${environment.api_url}/user/${userId}`).pipe(map((res) => res.data));
  // }
}
