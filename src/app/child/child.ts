import { Component, output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class ChildComponent {
  newItemEvent = output<string>();

  addNewItem(value: string): void {
    const item = value.trim();
    if (item) {
      this.newItemEvent.emit(item);
    }
  }
}