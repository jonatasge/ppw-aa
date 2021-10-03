import { Component, Input } from '@angular/core';
import { IBarNote } from './bar-note.interface';

@Component({
  selector: 'ev-bar-note',
  templateUrl: './bar-note.component.html',
  styleUrls: ['./bar-note.component.css'],
})
export class BarNoteComponent {
  @Input() note: IBarNote | any;
  @Input() primaryColor = 'black';
  @Input() backgroundColor = '#f0f0f0';

  constructor() {}

  repeat(n: number): any[] {
    return Array(n);
  }
}
