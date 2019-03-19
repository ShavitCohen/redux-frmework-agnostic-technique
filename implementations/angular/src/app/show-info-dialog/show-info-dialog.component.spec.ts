import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowInfoDialogComponent } from './show-info-dialog.component';

describe('ShowInfoDialogComponent', () => {
  let component: ShowInfoDialogComponent;
  let fixture: ComponentFixture<ShowInfoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowInfoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
