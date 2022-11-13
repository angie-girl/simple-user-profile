import { Component, OnInit } from "@angular/core";
import { take } from "rxjs";
import { User } from "src/app/interfaces/user.interface";
import { UsersService } from "src/app/services/users.service";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.scss"],
})
export class UserProfileComponent implements OnInit {
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
