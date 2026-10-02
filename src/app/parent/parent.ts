import { Component } from '@angular/core';
import { ChildComponent } from '../child/child';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class ParentComponent {

  logItemToConsole(item: string): void {
    console.log('New item added:', item);
  }
}