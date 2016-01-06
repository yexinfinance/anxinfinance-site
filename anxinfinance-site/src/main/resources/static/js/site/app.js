angular.module("site", ["ui.router", "common"])
    .config(function ($stateProvider, $urlRouterProvider) {
        var defaultUrl = "/home";

        $stateProvider
            .state("home", {
                url: defaultUrl,
                templateUrl: "/templates/home.html",
                controller: "HomeController",
                data: {
                    channel: "home"
                }
            })
            .state("production", {
                url: "/production",
                templateUrl: "/templates/production.html",
                controller: "ProductionController",
                data: {
                    channel: "production"
                }
            });

        $urlRouterProvider.otherwise(defaultUrl);
    });