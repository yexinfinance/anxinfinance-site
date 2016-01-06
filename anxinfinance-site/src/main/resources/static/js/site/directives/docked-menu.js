var app = angular.module("site");

app.directive("dockedMenu", function($window) {
    var scrollingThreshold = 80;

    return function link(scope, element, attrs) {
        scope.shouldInvertColor = false;

        angular.element($window).bind("scroll", function() {
            var windowTop = $($window).scrollTop();
            scope.shouldInvertColor = windowTop > scrollingThreshold;
            scope.$apply();

            if (scope.shouldInvertColor) {
                $("#logo").attr("src", "../images/logo-blue.png")
            } else {
                $("#logo").attr("src", "../images/logo-white.png")
            }
        });
    };
});