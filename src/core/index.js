import pinger from './services/pingService';
import validation from './services/validationService';

export default angular.module('app.services', [])
    .factory('ValidationService', validation)
    .factory('PingerService', pinger).name;
