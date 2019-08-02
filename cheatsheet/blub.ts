import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, delay } from 'rxjs/operators';
import { AbstractOperatorComponent } from '../graphics/abstract-operator-component';

@Component({
  selector: 'app-blub',
  templateUrl: './blub.component.html',
  styleUrls: ['./blub.component.css']
})

export class Blub {

}