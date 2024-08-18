import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { shareReplay, retry } from 'rxjs';
import { MarketingSymbol } from '../../models/marketing-symbol';
import { FeaturesService } from '../../Services/features.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  private featuresService = inject(FeaturesService);
  marketingCaSymbolsData: MarketingSymbol[] = [];

  ngOnInit(): void {

    const s$ = this.featuresService
      .getCaMarketingSymbolList()
      .pipe(shareReplay(5),
        retry(3));

    s$.subscribe((data: MarketingSymbol[]) => {
      this.marketingCaSymbolsData = data;
    });
  }
}
