import { Component, OnInit, Input } from '@angular/core';
import { AbstractOperatorComponent } from '../../graphics/abstract-operator-component';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent {
@Input()
public demo: AbstractOperatorComponent;

}
