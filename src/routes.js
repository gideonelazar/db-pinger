export default function($stateProvider, $urlRouterProvider) {
    'ngInject';
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            template: require('./views/pinger/pinger.html'),
            controller: 'Pinger',
            controllerAs: 'vm'
        });
}
