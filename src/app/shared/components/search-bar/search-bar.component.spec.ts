import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchBarComponent } from './search-bar.component';
import { configureTestSuite } from 'ng-bullet';
import { MockPipe } from 'ng-mocks';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { CapitalizeFirstPipe } from '../../pipes/capitalize-first.pipe';
import { ROUTES_CONFIG, RoutesConfig } from '../../../configs/routes.config';
import { MatInputModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        NoopAnimationsModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule
      ],
      declarations: [
        MockPipe(CapitalizeFirstPipe),
        SearchBarComponent
      ],
      providers: [
        { provide: ROUTES_CONFIG, useValue: RoutesConfig }
      ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });
});
