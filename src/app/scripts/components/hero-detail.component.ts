import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../classes/Hero';
import {HeroService} from '../services/hero.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl: '../../templates/hero-detail.component.html'
})

export class HeroDetailComponent implements OnInit{
  @Input()
  hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.selectCurrentHero();
  }

  selectCurrentHero(): void {
    // +params['id'] to convert string to number
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.update(this.hero)
      .then(() => this.goBack());
  }

}
