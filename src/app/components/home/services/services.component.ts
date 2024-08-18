import { Component, inject } from '@angular/core';
import { FeaturesService } from '../../../Services/features.service';
import { MarketingSymbol } from '../../../models/marketing-symbol';
import { shareReplay, retry } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
 
}
