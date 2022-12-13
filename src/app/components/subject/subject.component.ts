import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css'],
})
export class SubjectComponent implements OnInit, OnDestroy {
  subject$ = new BehaviorSubject<number>(0);
  subscription: Subscription = new Subscription();
  subscription2: Subscription = new Subscription();

  ngOnInit(): void {
    this.subscription = this.subject$.subscribe((value) => {
      console.log(value);
    });

    setTimeout(() => {
      this.subscription2 = this.subject$.subscribe({
        next(val) {
          console.log(`sub 2 ${val}`);
        },
      });
    }, 3000);

    setTimeout(() => {
      this.subject$.next(Math.random());
    }, 7000);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
  }
}
