/**
 * Created by Yajing Li on 6/25/17.
 */
angular.module('controllersModule', ['servicesModule'])
    .controller('carriersCtrl', function ($scope, dataManagement) {
        let getDataPromise = dataManagement.getCarriers();
        getDataPromise.then(
            // success callback
            function (data) {
                $scope.carriers = data.data;
                //console.log(data.data);
            },
            // error callback
            function (data, status) {
                $scope.errorMessage = status;
            });
    }).controller('carriersDetailsCtrl', function ($scope, dataManagement, $routeParams) {

        let getDataPromise = dataManagement.getCarriersDetails($routeParams.carrierName);
        getDataPromise.then(
            function (data) {
                //console.log(data.data[0].carrier, data.data[0].routes);
                $scope.carrierName = data.data[0].carrier;
                $scope.flightDtls = data.data[0].routes;
            },
            function (data, status) {
                $scope.errorMessage = status;
            }
        );
    }).controller('flightDetailsCtrl', function($scope, dataManagement, $routeParams) {
        let getDataPromise = dataManagement.getFlightDetails(
                                    $routeParams.carrierName,
                                    $routeParams.flightName);

        getDataPromise.then(
            function (data) {
                let details = data.data[0];
                //console.log(details);
                $scope.carrierName = details.carrier;
                $scope.flightName = details.route;
                $scope.flightDtls = details.details;
            },
            function (data, status) {
                $scope.errorMessage = status;
            }
        );
    });

