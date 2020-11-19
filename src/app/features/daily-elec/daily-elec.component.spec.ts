import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyElecComponent } from './daily-elec.component';

describe('DailyElecComponent', () => {
  let component: DailyElecComponent;
  let fixture: ComponentFixture<DailyElecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyElecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyElecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
