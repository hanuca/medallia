angular.module('mail-app', ['ui.router']).config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/home');
    $locationProvider.html5Mode({
        enabled: true, requireBase: false
    });

    $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'src/home/main-page.html'
        })

        .state('inbox', {
            url: '/inbox',
            templateUrl: 'src/inbox/inbox.html'
        });
});