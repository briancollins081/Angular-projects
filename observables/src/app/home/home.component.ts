import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';
import { map, filter } from "rxjs/operators";

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
    const customCountObservable: Observable<any> = Observable.create(observer => {
      let c = 0;
      setInterval(() => {
        if (c === 15) {
          observer.complete();
        }
        if (c > 15) {
          observer.error(new Error('Count has exceeded maximum number: 3'));
        }
        observer.next(c);
        c++
      }, 1000)

    });


    this.customCntObservable = customCountObservable
      .pipe(
        filter((data: number) => {
          return data%2==0;
        }),
        map((data: number) => {
          return 'Round: ' + (data + 1);
        }))
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
          alert(error.message);
        },
        () => {
          console.log("Observable Completed Successfully");
        }
      )
  }

  ngOnDestroy() {
    // this.countObservableSubscription.unsubscribe();
    this.customCntObservable.unsubscribe();
  }

}
