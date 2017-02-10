import {Routes, RouterModule} from '@angular/router';
import {HeroesComponent} from './scripts/components/heroes.component';
import {DashboardComponent} from './scripts/components/dashboard.component';
import {HeroDetailComponent} from './scripts/components/hero-detail.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
