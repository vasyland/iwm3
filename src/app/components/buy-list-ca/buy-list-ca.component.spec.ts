import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyListCaComponent } from './buy-list-ca.component';

describe('BuyListCaComponent', () => {
  let component: BuyListCaComponent;
  let fixture: ComponentFixture<BuyListCaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyListCaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyListCaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
