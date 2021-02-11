import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexOnboardingComponent } from './pages/index-onboarding/index-onboarding.component';


const onboardRoutes: Routes = [
  {path: '', component: IndexOnboardingComponent}
];
@NgModule({
  imports: [RouterModule.forChild(onboardRoutes)],
  exports: [RouterModule]
})
export class OnboardingRoutingModule { }




