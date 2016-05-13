export default function() {
    'ngInject';

    var link = function (scope, elem, attr, ngModel) {
        ngModel.$asyncValidators[scope.asyncValidatorName] = scope.asyncValidator;
    };

    return {
      restrict: 'A',
      require: 'ngModel',
      scope: {
        asyncValidator: '=',
        asyncValidatorName: '@'
      },
      link: link
    };


}
