import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  countObservableSubscription: Subscription;
  customCntObservable: Subscription;
  constructor() { }

  ngOnInit() {
    /* this.countObservableSubscription = interval(1000).subscribe((c => {
      console.log(c);
    })); */
    const customCountObservable = Observable.create(observer => {
      let c = 0;
      setInterval(() => {
        observer.next(c);
        c++
      }, 1000)

    });

    this.customCntObservable = customCountObservable.subscribe((count) => {
      console.log(count);
    })
  }

  ngOnDestroy() {
    // this.countObservableSubscription.unsubscribe();
    this.customCntObservable.unsubscribe();
  }

}
