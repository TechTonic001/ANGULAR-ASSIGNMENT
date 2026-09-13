import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // 1. A simple variable to hold our number
  count: number = 0;

  // 2. Function to add 1
  increment() {
    this.count++;
  }

  // 3. Function to subtract 1 (with a simple if-statement)
  decrement() {
    if (this.count > 0) {
      this.count--;
    }
  }
}