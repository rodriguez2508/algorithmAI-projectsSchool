import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  // --
  // -- Acceso publico de usuarios:
  // --

  {
    path: 'home',
    component: HomeComponent,
  },
  { path: '**', pathMatch: 'full', component: HomeComponent },
];
