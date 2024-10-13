import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { RouterLink, RouterOutlet, RouterModule } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, 
    RouterOutlet, 
    RouterLink, 
    RouterModule, 
    HomeComponent, 
    AboutComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

    authService: AuthService = inject(AuthService);

}
