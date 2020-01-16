import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{
  countObservableSubscription: Subscription;
  constructor() { }

  ngOnInit() {
    this.countObservableSubscription = interval(1000).subscribe((c => {
      console.log(c);
    }));
  }

  ngOnDestroy(){
    this.countObservableSubscription.unsubscribe();
  }

}
