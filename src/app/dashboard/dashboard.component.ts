import { Component, OnInit } from "@angular/core";
import { take } from "rxjs";
import { User } from "../interfaces/user.interface";
import { UsersService } from "../services/users.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  user!: User;

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.getUser();
  }

  private getUser(): void {
    this.userService.currentUser.pipe(take(1)).subscribe((res) => {
      if (!res) {
        return;
      }
      this.user = res;
    });
  }
}
