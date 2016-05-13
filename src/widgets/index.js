import asyncValidator from './asyncValidator';

export default angular.module('app.widgets', [])
    .directive('asyncValidator', asyncValidator).name;
