import {InjectionToken} from '@angular/core';

export let ROUTES_CONFIG = new InjectionToken('routes.config');


const routesNames = {
  home: '',
  error404: '404',
  onboarding: 'onboarding',
  player: 'player',
};

export const RoutesConfig: any = {
  routesNames,
  routes: {
    home: `/${routesNames.home}`,
    error404: `/${routesNames.error404}`,
    onboarding: `/${routesNames.home}`,
    player: `/${routesNames.player}`,
  }
};
