import { Component } from '@angular/core';
import { BuyListCaComponent } from '../buy-list-ca/buy-list-ca.component';
import { RouterOutlet, RouterLink, RouterModule } from '@angular/router';
import { VolatilityDatesComponent } from '../volatility-dates/volatility-dates.component';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [BuyListCaComponent, RouterOutlet, RouterLink, RouterModule, VolatilityDatesComponent],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
  public assetsPath: string = environment.assetsPath; // Define a property

[x: string]: any;

}
