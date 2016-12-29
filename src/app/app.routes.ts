import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { PlayerComponent } from './player';
import { PlayerCreatorComponent } from './player-creator';
import { PlayerDetailComponent } from './player-detail';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'player/:id', component: PlayerDetailComponent },
  { path: '**',    component: NoContentComponent },
];
