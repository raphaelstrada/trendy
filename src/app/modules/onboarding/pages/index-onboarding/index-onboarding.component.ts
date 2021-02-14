import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-onboarding',
  templateUrl: './index-onboarding.component.html',
  styleUrls: ['./index-onboarding.component.scss']
})
export class IndexOnboardingComponent implements OnInit {

  constructor(private router: Router) { }

  goToPlayer = () => {
    this.router.navigateByUrl('/player');
  }
  ngOnInit() {
  }

}
