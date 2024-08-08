import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyListUsComponent } from './buy-list-us.component';

describe('BuyListUsComponent', () => {
  let component: BuyListUsComponent;
  let fixture: ComponentFixture<BuyListUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyListUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyListUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
