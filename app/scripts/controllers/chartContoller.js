'use strict';
/**
 * @ngdoc function
 * @name ApsilonApp.controller:ChartCtrl
 * @description
 * # ChartCtrl
 * Controller of the ApsilonApp
 */
angular.module('ApsilonApp')
        .controller('ChartCtrl', ['$scope', '$timeout', '$http', function ($scope, $timeout, $http) {

                $http.get(BASE_URL + '/Chart/get_accounts').success(function(res) {
                  console.log(res);
                  $scope.line = {
                      labels: res.month,
                      series: res.type,
                      data: res.data,
                      onClick: function (points, evt) {
                          console.log(points, evt);
                      }
                  };

                  });


                $scope.bar = {
                    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
                    series: ['Series A', 'Series B'],
                    data: [
                        [65, 59, 80, 81, 56, 55, 40],
                        [28, 48, 40, 19, 86, 27, 90]
                    ]

                };

                $scope.donut = {
                    labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
                    data: [300, 500, 100]
                };

                $scope.radar = {
                    labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
                    data: [
                        [65, 59, 90, 81, 56, 55, 40],
                        [28, 48, 40, 19, 96, 27, 100]
                    ]
                };

                $scope.pie = {
                    labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
                    data: [300, 500, 100]
                };

                $scope.polar = {
                    labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"],
                    data: [300, 500, 100, 40, 120]
                };

                $scope.dynamic = {
                    labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"],
                    data: [300, 500, 100, 40, 120],
                    type: 'PolarArea',
                    toggle: function ()
                    {
                        this.type = this.type === 'PolarArea' ?
                                'Pie' : 'PolarArea';
                    }
                };
            }]);
