import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from './parent/parent';

@Component({
  selector: 'app-root',
  imports: [ParentComponent, RouterOutlet],
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