import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapstuffComponent } from './mapstuff.component';

describe('MapstuffComponent', () => {
  let component: MapstuffComponent;
  let fixture: ComponentFixture<MapstuffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapstuffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapstuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
