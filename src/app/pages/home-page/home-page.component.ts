import {Component, OnInit} from '@angular/core';
import {Hero} from '../../modules/heroes/shared/hero.model';
import {HeroService} from '../../modules/heroes/shared/hero.service';
import {AppConfig} from '../../configs/app.config';
import {Observable} from 'rxjs';
import {defaultIfEmpty, map} from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],

})

export class HomePageComponent implements OnInit {
  heroes$: Observable<Hero[]>;

  constructor(private heroService: HeroService, public dialog: MatDialog) {
  }
  openDialog() {
    const dialogRef = this.dialog.open(LoginDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {
    this.heroes$ = this.heroService.getHeroes().pipe(
      map((heroes) => heroes.slice(0, AppConfig.topHeroesLimit)),
      defaultIfEmpty([])
    );
  }
}

@Component({
  selector: 'app-login-dialog',
  templateUrl: 'login-dialog.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class LoginDialogComponent {
constructor(private router: Router) { }

  login = () => {
    this.router.navigateByUrl('/onboarding');
  }
}
