import {Component, OnInit} from '@angular/core';
import {HeroSearchService} from '../services/hero-search.service';
import {Observable} from 'rxjs/Observable';
import {Hero} from '../classes/Hero';
import {Router} from '@angular/router';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import {Subject} from 'rxjs/Subject';

@Component({
  moduleId: module.id,
  selector: 'hero-search',
  templateUrl: '../../templates/hero-search.component.html',
  styleUrls: [
    '../../styles/hero-search.component.css'
  ],
  providers: [HeroSearchService]
})
export class HeroSearchComponent implements OnInit {
  heroes: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private heroSearchService: HeroSearchService,
    private router: Router
  ) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term
        ? this.heroSearchService.search(term)
        : Observable.of<Hero[]>([]))
      .catch(error => {
        console.error(error);
        return Observable.of<Hero[]>([]);
      });
  }

  gotoDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }

}
