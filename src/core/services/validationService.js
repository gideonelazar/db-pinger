export default function($http, $q, $timeout) {
    'ngInject';

    let services = {
        ValidationCheck: validationCheck
    };

    function validationCheck(modelValue, viewValue) {
        return $q(function(resolve, reject) {
            $timeout(function() {
                $http({
                    method: 'GET',
                    url: 'http://jsonplaceholder.typicode.com/posts/1',
                    // params: {
                    //     name: modelValue
                    // }
                }).then(function(res) {
                    if (res.data) {
                        return resolve();
                    }
                    return reject();
                }, function() {
                    reject();
                });
            }, 500);
        });
    }

    return services;

}
