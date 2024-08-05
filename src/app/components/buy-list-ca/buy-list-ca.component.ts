import { Component, inject } from '@angular/core';
import { BuySymbol } from '../../models/buy-symbol';
import { shareReplay, retry } from 'rxjs/operators';
import { FeaturesService } from '../../Services/features.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buy-list-ca',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './buy-list-ca.component.html',
  styleUrl: './buy-list-ca.component.css'
})
export class BuyListCaComponent {

  buySymbolData: BuySymbol[] = [];
  
  private featuresService = inject(FeaturesService);

  ngOnInit(): void {

    const s$ = this.featuresService
      .getCABuyList()
      .pipe(shareReplay(5),
        retry(3));

    s$.subscribe((data: BuySymbol[]) => {
      this.buySymbolData = data;
    });
  }
}
