import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RightComponent } from './login/right/right.component';
import { LeftComponent } from './login/left/left.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import {router} from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RightComponent,
    LeftComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
