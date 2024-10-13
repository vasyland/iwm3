import { Routes } from '@angular/router';
import { BuyListCaComponent } from './components/buy-list-ca/buy-list-ca.component';

export const routes: Routes = [
    
    // { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '', 
        loadComponent: () => import('./components/home/home.component')
             .then(c => c.HomeComponent)
    },
    { path: 'home', 
        loadComponent: () => import('./components/home/home.component')
             .then(c => c.HomeComponent)
    },
    { path: 'about', 
        loadComponent: () => import('./components/about/about.component')
             .then(c => c.AboutComponent)
    },
    { path: 'features', loadComponent: () => import('./components/features/features.component')
        .then(c => c.FeaturesComponent)
    },
    { path: 'ca-buy-list', 
        loadComponent: () => import('./components/buy-list-ca/buy-list-ca.component')
             .then(c => c.BuyListCaComponent)
    },
    { path: 'us-buy-list', 
        loadComponent: () => import('./components/buy-list-us/buy-list-us.component')
             .then(c => c.BuyListUsComponent)
    },
    { path: 'volatility-dates', 
        loadComponent: () => import('./components/volatility-dates/volatility-dates.component')
             .then(c => c.VolatilityDatesComponent)
    },
    { path: 'login', 
        loadComponent: () => import('./components/login/login.component')
             .then(c => c.LoginComponent)
    },
    { path: 'join', 
        loadComponent: () => import('./components/register/register.component')
             .then(c => c.RegisterComponent)
    },
    { path: '**', 
        loadComponent: () => import('./components/notfound/notfound.component')
            .then(c => c.NotfoundComponent)
    }
];
