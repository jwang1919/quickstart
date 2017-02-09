import {Component, OnInit} from '@angular/core';
import {Hero} from './Hero';
import {HeroService} from './hero.service';

const TOP_HERO_QTY = 4;

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [
    './dashboard.component.css'
  ],
  providers: [
    HeroService
  ]
})

export class DashboardComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes(TOP_HERO_QTY);
  }

  getHeroes(qty: number): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(0, qty + 1));
  }

}
