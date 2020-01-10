import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activePath: string = "home";
  currentUrl: string;

  constructor() { }

  ngOnInit() {

  }
  /* onActivateLink(link) {
    // console.log(link.innerText.toLowerCase());
    let innerText = link.innerText.toLowerCase();
    switch (innerText) {
      case "home":
        this.activePath = "home"
        break;
      case "servers":
        this.activePath = "servers"
        break;
      case "users":
        this.activePath = "users"
        break;
    }
  } */
}
