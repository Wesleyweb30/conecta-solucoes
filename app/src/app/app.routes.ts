import { Routes } from '@angular/router';
import { HomeComponent } from './_pages/home/home.component';
import { ProblemaNewComponent } from './_pages/problema-new/problema-new.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "problema-new",
    component: ProblemaNewComponent
  }
];
