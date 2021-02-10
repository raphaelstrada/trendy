import {InjectionToken} from '@angular/core';

export let ROUTES_CONFIG = new InjectionToken('routes.config');

const basePaths = {
  heroes: 'heroes',
};

const routesNames = {
  home: '',
  error404: '404',
  onboarding: 'onboarding',
  heroes: {
    basePath: basePaths.heroes
  }
};

export const RoutesConfig: any = {
  routesNames,
  routes: {
    home: `/${routesNames.home}`,
    error404: `/${routesNames.error404}`,
    onboarding: `/${routesNames.home}`,
    heroes: {
      detail: getHeroDetail
    }
  }
};

export function getHeroDetail(id) {
  return `/${basePaths.heroes}/${id}`;
}
