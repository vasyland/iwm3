import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolatilityDatesComponent } from './volatility-dates.component';

describe('VolatilityDatesComponent', () => {
  let component: VolatilityDatesComponent;
  let fixture: ComponentFixture<VolatilityDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolatilityDatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolatilityDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
