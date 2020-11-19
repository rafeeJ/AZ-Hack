import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyRecyclingComponent } from './daily-recycling.component';

describe('DailyRecyclingComponent', () => {
  let component: DailyRecyclingComponent;
  let fixture: ComponentFixture<DailyRecyclingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyRecyclingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyRecyclingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
