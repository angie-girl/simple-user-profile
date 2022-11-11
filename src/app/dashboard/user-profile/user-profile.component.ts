import { Component, OnInit } from '@angular/core';
import { UserDto } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user!: UserDto;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.getUser();
  }

  private getUser(): void {
    this.userService.getUser().subscribe(res => {
      this.user = res;
      console.log(res);
      
    })
  }
}
