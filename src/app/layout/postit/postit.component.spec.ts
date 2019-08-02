import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostitComponent } from './postit.component';

describe('PostitComponent', () => {
  let component: PostitComponent;
  let fixture: ComponentFixture<PostitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
