import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OperationComponent implements OnInit {
  @Input()
  public title: string;
  constructor() {}

  ngOnInit() {}
}
