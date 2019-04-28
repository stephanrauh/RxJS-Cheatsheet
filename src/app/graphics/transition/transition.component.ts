import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransitionComponent implements OnInit {
  @Input()
  data: string;

  constructor() {}

  ngOnInit() {}
}
