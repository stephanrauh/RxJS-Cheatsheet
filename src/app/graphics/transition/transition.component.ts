import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransitionComponent {
  @Input()
  public data: string;

  @Input()
  public lines = 1;
}
