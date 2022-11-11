import { Component, OnInit } from '@angular/core';
import { UserDto } from '../interfaces/user.interface';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
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
