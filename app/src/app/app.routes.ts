import { Routes } from '@angular/router';
import { HomeComponent } from './_pages/home/home.component';
import { ProblemaNewComponent } from './_pages/problema-new/problema-new.component';
import { ProblemaDetailsComponent } from './_pages/problema-details/problema-details.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'problema-new',
    component: ProblemaNewComponent
  },
  {
    path: 'problema/:id',
    component: ProblemaDetailsComponent
  }
];
