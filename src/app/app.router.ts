import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {RulesComponent} from './home/rules/rules.component';
import {LeaderboardComponent} from './home/leaderboard/leaderboard.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent,
    children: [
      { path: '', redirectTo: 'leaderboard', pathMatch: 'full' },
      { path: 'leaderboard', component: LeaderboardComponent },
      { path: 'rules', component: RulesComponent }
    ]
  },
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);
