import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BuySymbol } from '../models/buy-symbol';
import { VolatilityDay } from '../models/volatility-day';

@Injectable({
  providedIn: 'root'
})
export class FeaturesService {
  private http = inject(HttpClient);
  constructor() { }

  getCABuyList(): Observable<BuySymbol[]> {
    return this.http.get<BuySymbol[]>('https://localhost:8081/free/free-buy-list');
  }

  getVolatilityDaysList(): Observable<VolatilityDay[]> {
    return this.http.get<VolatilityDay[]>('https://localhost:8081/free/volatile-days');
  }
}
