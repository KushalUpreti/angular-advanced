import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  observable: Observable<number> = new Observable<number>();
  subscription: Subscription = new Subscription();
  subscription2: Subscription = new Subscription();

  ngOnInit(): void {
    this.observable = new Observable((subscriber) => {
      subscriber.next(101);
      subscriber.next(1);
      setTimeout(() => {
        subscriber.next(66);
        subscriber.complete();
      }, 2000);
    });

    // this.subscription = this.observable
    //   .pipe(
    //     map((v) => v * 2),
    //     filter((v) => v < 200)
    //   )
    //   .subscribe((value) => {
    //     console.log(value);
    //   });

    // setTimeout(() => {
    //   this.subscription2 = this.observable.subscribe({
    //     next(val) {
    //       console.log(`sub 2 ${val}`);
    //     },
    //     error(err) {
    //       console.log(`something went wrong: ${err}`);
    //     },
    //     complete() {
    //       console.log('sub 2 completed');
    //     },
    //   });
    // }, 7000);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
  }
}
