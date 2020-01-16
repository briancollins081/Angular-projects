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
        if (c === 3) {
          observer.complete();
        }
        if (c > 3) {
          observer.error(new Error('Count has exceeded maximum number: 3'));
        }
        observer.next(c);
        c++
      }, 1000)

    });

    this.customCntObservable = customCountObservable
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
          alert(error.message);
        },
        ()=>{
          console.log("Observable Completed Successfully");
        }
      )
  }

  ngOnDestroy() {
    // this.countObservableSubscription.unsubscribe();
    this.customCntObservable.unsubscribe();
  }

}
