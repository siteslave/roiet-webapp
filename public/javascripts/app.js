angular.module('App', [
    'lumx', 'ui.router',
    'app.filter.toThaiDate',
    'app.controller.MainCtrl'
])

.config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: '/templates/main.html',
                controller: 'MainCtrl'
            })

            .state('users', {
                url: '/users',
                templateUrl: '/templates/users.html'
            })
    });