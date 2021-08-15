import { Component, OnInit } from '@angular/core';
import { MyService } from '@services/my-service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {
  name = 'loading...';

  constructor(private myService: MyService) {}

  ngOnInit() {
    this.myService.http
      .get('http://localhost:3000/api/users')
      .subscribe((data: { [key: string]: string }) => {
        this.name = data.user;
      });
  }
}
