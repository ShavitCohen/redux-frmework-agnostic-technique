import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallShowComponent } from './small-show.component';

describe('SmallShowComponent', () => {
  let component: SmallShowComponent;
  let fixture: ComponentFixture<SmallShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
