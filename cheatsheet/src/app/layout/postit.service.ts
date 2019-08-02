import { Injectable } from '@angular/core';
import { PositionAndAngle } from './postit/position-and-angle';

@Injectable({
  providedIn: 'root'
})
export class PostitService {
  private counter = 0;

  private positions: Array<PositionAndAngle> = [
    { x: 290, y: 130, angle: '-1deg', fontsize: 200 },
    { x: 200, y: 435, angle: '3deg', fontsize: 170 },
    { x: 190, y: 150, angle: '2deg', fontsize: 210 },
    { x: 100, y: 475, angle: '-3deg', fontsize: 180 },
    { x: 490, y: 140, angle: '1deg', fontsize: 220 },
    { x: 400, y: 405, angle: '-1deg', fontsize: 190 }
  ];

  constructor() {}

  public postItPosition(): PositionAndAngle {
    return this.positions[this.counter++];
  }

  public releasePostit(): void {
    this.counter--;
  }
}
