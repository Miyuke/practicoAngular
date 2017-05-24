'use strict';
var app = angular.module('videoStore', []);
app.controller('ContactController', ContactController);
app.controller('FeedbackController', FeedbackController);

ContactController.$inject = ['$scope'];
function ContactController($scope) {
     var channels = [{
          value: "tel",
          label: "Tel."
     },
     {
          value: "Email",
          label: "Email"
     }];
     $scope.channels = channels;
     $scope.invalidChannelSelection = false;
}

FeedbackController.$inject = ['$scope'];
function FeedbackController($scope) {
     $scope.feedback = {
          mychannel: "",
          firstname: "",
          lastname: "",
          agree: false,
          email: ""
     }
     $scope.sendFeedback = function(){
          $scope.showMessage = false;
          if ($scope.feedback.agree && ($scope.feedback.mychannel == "" || !$scope.feedback.mychannel)){
               $scope.invalidChannelSelection = true;
          } else {
               $scope.invalidChannelSelection = false;
               $scope.feedback.mychannel = "";
               $scope.feedback = {
                    mychannel: "",
                    firstname: "",
                    lastname: "",
                    agree: false,
                    email: ""
               }
               $scope.feedbackForm.$setPristine();
               $scope.showMessage = true;
          }
     }
}

var app = angular.module('videoStore', ['ngRoute'])
    .config(Config)
Config.$inject = ['$routeProvider']

function Config($routeProvider) {
    $routeProvider  
    .when('/filmList', {
        templateUrl : 'filmList.html',
        controller  : 'HomeController'
    })
    .otherwise('/filmList');
}
