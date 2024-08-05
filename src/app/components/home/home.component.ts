import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BannerComponent } from './banner/banner.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PopularComponent } from './popular/popular.component';
import { ServicesComponent } from './services/services.component';
import { TestimonyComponent } from './testimony/testimony.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, 
    FormsModule, 
    BannerComponent, 
    ContactUsComponent, 
    PopularComponent, 
    ServicesComponent, 
    TestimonyComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
