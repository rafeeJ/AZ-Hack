import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyTravelComponent } from './daily-travel.component';

describe('DailyTravelComponent', () => {
  let component: DailyTravelComponent;
  let fixture: ComponentFixture<DailyTravelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyTravelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
