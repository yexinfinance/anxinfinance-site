angular.module("site", ["ui.router", "common"])
    .config(function ($stateProvider, $urlRouterProvider) {
        var defaultUrl = '/home';

        $stateProvider
            .state('home', {
                url: defaultUrl,
                templateUrl: '/templates/home.html',
                controller: 'HomeController',
                data: {
                    channel: 'home'
                }
            });

        $urlRouterProvider.otherwise(defaultUrl);
    });