import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { map, switchMap } from "rxjs/operators";
import { User } from "../interfaces/user.interface";
import { IRequest } from "../interfaces/request";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  currentUser: Observable<User | null>;
  private currentUserSubject: BehaviorSubject<User | null>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User | null>(null);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  initCurrentUser(): Observable<void> {
    return this.getUser().pipe(
      switchMap((res: User) => {
        this.currentUserSubject.next(res);
        return of(void 0);
      })
    );
  }

  private getUser(): Observable<User> {
    return this.http
      .get<IRequest>(environment.api_url)
      .pipe(map((res) => res.results[0]));
  }
}
