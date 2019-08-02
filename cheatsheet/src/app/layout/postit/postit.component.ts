import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostitService } from '../postit.service';
import { PositionAndAngle } from './position-and-angle';

@Component({
  selector: 'app-postit',
  templateUrl: './postit.component.html',
  styleUrls: ['./postit.component.css']
})
export class PostitComponent implements OnInit, OnDestroy {
  public top: string;
  public right: string;
  public transform: string;
  public fontSize: string;

  constructor(private postitServce: PostitService) {}

  public ngOnInit(): void {
    const pos = this.postitServce.postItPosition();
    this.top = pos.x + 'px';
    this.right = pos.y + 'px';
    this.transform = 'rotate(' + pos.angle + ')';
    this.fontSize = pos.fontsize + '%';
  }

  public ngOnDestroy(): void {
    this.postitServce.releasePostit();
  }
}
