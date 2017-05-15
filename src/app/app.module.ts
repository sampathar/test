import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RightComponent } from './login/right/right.component';
import { LeftComponent } from './login/left/left.component';
import { HomeComponent } from './home/home.component';
import { routing, appRoutingProviders } from './app.router';
import { RulesComponent } from './home/rules/rules.component';
import { LeaderboardComponent } from './home/leaderboard/leaderboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RightComponent,
    LeftComponent,
    HomeComponent,
    RulesComponent,
    LeaderboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
