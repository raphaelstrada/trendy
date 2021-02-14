import {map, startWith} from 'rxjs/operators';
import {Component, Inject, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ROUTES_CONFIG} from '../../../configs/routes.config';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})

export class SearchBarComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
