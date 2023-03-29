import { Routes } from '@angular/router';
import { CalculatriceComponent } from './calculatrice/calculatrice.component';
import { CardComponent } from './card/card.component';

export const ROUTES: Routes = [
  { path: '', component: CardComponent },
  { path: 'calculatrice', component: CalculatriceComponent },
  { path: 'card-profile', component: CardComponent },
];