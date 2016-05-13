export default function ($http) {
    'ngInject';

    let services = {
        Check: check
    };

    function check() {
        return $http({
            method: 'GET',
            url: 'http://jsonplaceholder.typicode.com/posts/1',
            headers: {
                'Content-Type': 'application/json'
            },
        });
    }

    return services;

}
