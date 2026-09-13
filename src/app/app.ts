import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count = Math.max(0, this.count - 1);
  }
}