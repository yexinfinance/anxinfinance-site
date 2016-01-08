var app = angular.module("site", ["ui.router", "angular-jqcloud", "common"]);

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
        })
        .state("client", {
            url: "/client",
            templateUrl: "/templates/client.html",
            controller: "ClientController",
            data: {
                channel: "client"
            }
        })
        .state("service", {
            url: "/service",
            templateUrl: "/templates/service.html",
            controller: "ServiceController",
            data: {
                channel: "service"
            }
        })
        .state("team", {
            url: "/team",
            abstract: true,
            templateUrl: "/templates/team.html",
            controller: "TeamController",
            data: {
                channel: "team"
            }
        })
        .state("about-us", {
            url: "/about-us",
            parent: "team",
            templateUrl: "/templates/team/about-us.html",
            controller: "AboutUsController",
            data: {
                channel: "team",
                tab: "team/about-us"
            }
        })
        .state("join-us", {
            url: "/join-us",
            parent: "team",
            templateUrl: "/templates/team/invitation.html",
            controller: "InvitationController",
            data: {
                channel: "team",
                tab: "team/join-us"
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

        var currentTab = "";
        if ($scope.channel == "team") {
            var currentTab = "team/about-us";
        }

        $scope.tab = !!toState.data && !!toState.data.tab
            ? toState.data.tab
            : currentTab;
    });
}]);