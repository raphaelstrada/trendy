import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {OnboardingRoutingModule} from './onboarding-routing.module';
import {SharedModule} from '../../shared/shared.module';
import { IndexOnboardingComponent } from './pages/index-onboarding/index-onboarding.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DragScrollModule } from 'ngx-drag-scroll';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    OnboardingRoutingModule,
    NgbModule,
    DragScrollModule
  ],
  declarations: [
    IndexOnboardingComponent,
  ]
})

export class OnboardingModule { }
