
import uiRouter from 'angular-ui-router';
import angularMaterial from 'angular-material';
import angularMaterialCss from '../node_modules/angular-material/angular-material.min.css';

import controllers from './views/index';
import services from './core/index';
import widgets from './widgets/index';
import routes from './routes';

angular.module('app', [
    uiRouter,
    angularMaterial,
    //local,
    controllers,
    widgets,
    services
]).config(routes);
