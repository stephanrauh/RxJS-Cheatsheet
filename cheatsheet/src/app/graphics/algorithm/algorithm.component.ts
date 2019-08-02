import { Step } from './../step';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-algorithm',
  templateUrl: './algorithm.component.html',
  styleUrls: ['./algorithm.component.css']
})
export class AlgorithmComponent implements OnInit {
  @Input()
  public algorithm: Array<Step> = [];

  constructor() { }

  ngOnInit() {
  }

}
