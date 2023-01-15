import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test-app';

  // stream$ = Observable.create((observer: Observer<number>) => {
  //   observer.next(1);
  //   setTimeout(() => {
  //     observer.next(2);
  //   }, 2000);
  //   setTimeout(() => {
  //     observer.next(3);
  //   }, 3000);
  //   setTimeout(() => {
  //     observer.complete();
  //   }, 4000);
  // });

  // subscription = this.stream$.subscribe((res: number) => console.log(res));
}
