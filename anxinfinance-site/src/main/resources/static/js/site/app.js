var app = angular.module("site", ["ui.router", "common"])

app.config(function ($stateProvider, $urlRouterProvider) {
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
                channel: "prod"
            }
        });

    $urlRouterProvider.otherwise(defaultUrl);
});

app.controller("MainController", ["$scope", "$rootScope", function ($scope, $rootScope) {
    var defaultChannel = "home";
    
    $rootScope.$on("$stateChangeStart", function (event, toState) {
        $scope.channel = !!toState.data && !!toState.data.channel
            ? toState.data.channel
            : defaultChannel;
    });
}]);