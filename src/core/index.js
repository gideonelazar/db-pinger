import pinger from './services/pingService'

export default angular.module('app.services', [])
    .factory('PingService', pinger).name;
