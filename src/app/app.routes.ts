import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { SidenavComponent } from './pages/sidenav/sidenav.component';
import { FooterComponent } from './pages/footer/footer.component';
import { EnquiryComponent } from './pages/enquiry/enquiry.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'Home',
        pathMatch: 'full'
    },
    {
        path: 'Home',
        component: HomeComponent
    },
    {
        path: 'navbar',
        component: NavbarComponent
    },
    {
        path: 'sidebar',
        component: SidenavComponent
    },
    {
        path: 'footer',
        component: FooterComponent
    },
    {
        path: 'enquiry',
        component: EnquiryComponent
    }
];
