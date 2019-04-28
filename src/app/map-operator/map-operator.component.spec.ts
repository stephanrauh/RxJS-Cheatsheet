import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapOperatorComponent } from './map-operator.component';

describe('MapOperatorComponent', () => {
  let component: MapOperatorComponent;
  let fixture: ComponentFixture<MapOperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapOperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
