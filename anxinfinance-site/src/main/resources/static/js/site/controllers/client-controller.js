angular.module('site').controller('ClientController',
    ['$scope', '$http', function($scope, $http) {
        $scope.words = [
            {text: "金融机构", weight: 13},
            {text: "P2P公司", weight: 10.5},
            {text: "垂直流量", weight: 9.4},
            {text: "极速借贷APP", weight: 8},
            {text: "手机大卖场", weight: 6.2},
            {text: "借贷服务", weight: 5},
            {text: "传统金融机构", weight: 5},
            {text: "担保公司", weight: 5},
            {text: "家具城", weight: 5},
            {text: "白条", weight: 4},
            {text: "银行", weight: 4},
            {text: "保险", weight: 3},
            {text: "商城", weight: 3},
            {text: "电商", weight: 3},
            {text: "旅行社", weight: 3},
            {text: "车行", weight: 3},
            {text: "金融机构", weight: 3},
            {text: "装修平台", weight: 3},
            {text: "商场分期", weight: 2}
        ];

        $scope.colors = ["#6381c7", "#829ad2", "#8aa1d5", "#91a7d8", "#829ad2", "#b1c0e3", "#d0d9ee"];
    }]);