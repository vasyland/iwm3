import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { shareReplay, retry } from 'rxjs/operators';
import { VolatilityDay } from '../../models/volatility-day';
import { FeaturesService } from '../../Services/features.service';


@Component({
  selector: 'volatility-dates',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './volatility-dates.component.html',
  styleUrl: './volatility-dates.component.css'
})
export class VolatilityDatesComponent {

  volatilityDays: VolatilityDay[] = [];

  private featuresService = inject(FeaturesService);

  ngOnInit(): void {

    const s$ = this.featuresService
      .getVolatilityDaysList()
      .pipe(shareReplay(5),
        retry(3));

    s$.subscribe((data: VolatilityDay[]) => {
      this.volatilityDays = data;
    });
  }
}
