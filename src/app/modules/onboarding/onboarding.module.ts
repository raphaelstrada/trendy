import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {OnboardingRoutingModule} from './onboarding-routing.module';
import {SharedModule} from '../../shared/shared.module';

import { CommonModule } from '@angular/common';


import { IndexOnboardingComponent } from './pages/index-onboarding/index-onboarding.component';
@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    OnboardingRoutingModule
  ],
  declarations: [
    IndexOnboardingComponent,
  ],
  entryComponents: [
    // HeroRemoveComponent
  ]
})

export class OnboardingModule { }
