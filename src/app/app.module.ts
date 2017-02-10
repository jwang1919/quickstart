import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './scripts/components/app.component';
import { FormsModule } from '@angular/forms';
import {HeroDetailComponent} from './scripts/components/hero-detail.component';
import {HeroesComponent} from './scripts/components/heroes.component';
import {DashboardComponent} from './scripts/components/dashboard.component';
import {HeroService} from './scripts/services/hero.service';
import {AppRoutingModule} from './app-routing.module';
import {HttpModule} from '@angular/http';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './scripts/services/in-memory-data.service';
import {HeroSearchComponent} from './scripts/components/hero-search.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [
    HeroService
  ]
})

export class AppModule { }
