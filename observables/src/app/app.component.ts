import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isActive: boolean;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.activatedUserEmmiter.subscribe(activeState=>{
      this.isActive=activeState;
    })
   }
}
