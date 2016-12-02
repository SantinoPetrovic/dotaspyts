import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { PlayerComponent } from './player';
import { PlayerListComponent } from './player-list';
import { PlayerCreatorComponent } from './player-creator';
import { PlayerDetailComponent } from './player-detail';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'players', component: PlayerListComponent },
  { path: 'creator', component: PlayerCreatorComponent },
  { path: 'creator/:id', component: PlayerDetailComponent },
  {
    path: 'detail', loadChildren: () => System.import('./+detail').then((comp: any) => {
      return comp.default;
    })
    ,
  },
  { path: '**',    component: NoContentComponent },
];
