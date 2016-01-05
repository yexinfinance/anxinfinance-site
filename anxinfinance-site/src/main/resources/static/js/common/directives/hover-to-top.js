var app = angular.module("common");

app.directive("hoverToTop", function($window) {
    function convertPixelToInt(numInPixel) {
        return parseInt(numInPixel.substring(0, numInPixel.length - 2));
    }

    return function link(scope, element, attrs) {
        var sandbox = $("#sandbox");
        var offsetY = 0;
        var hasRecordedInitialOffsetY = false;

        angular.element($window).bind("scroll", function() {
            var elementTop = element.offset().top;
            if (!hasRecordedInitialOffsetY) {
                offsetY = elementTop;
                hasRecordedInitialOffsetY = true;
            }

            var windowTop = $($window).scrollTop();
            var distanceToTop = elementTop - windowTop;

            if (distanceToTop <= 0) {
                scope.dockedToTop = windowTop - offsetY >= 0;
            } else {
                scope.dockedToTop = false;
            }

            if (scope.dockedToTop) {
                var targetWidth = sandbox.width();
                var elemPaddingLeft = convertPixelToInt(element.css("padding-left"));
                var elemPaddingRight = convertPixelToInt(element.css("padding-Right"));
                element.width(targetWidth - elemPaddingLeft - elemPaddingRight);
            }

            scope.$apply();
        });
    };
});