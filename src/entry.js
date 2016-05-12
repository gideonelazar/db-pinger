import uiRouter from 'angular-ui-router';
import angularMaterial from 'angular-material';

import controllers from './views/index';
import services from './core/index';
import routes from './routes';

angular.module('app', [
    uiRouter,
    angularMaterial,
    //local,
    controllers,
    services
]).config(routes);
