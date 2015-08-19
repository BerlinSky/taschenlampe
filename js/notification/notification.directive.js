"use strict";

(function(module){

  var notification = function(notifying) {


    return {
      restrict: "AE",
      templateUrl: "js/notification/template/notification.html",
      scope: true,
      controller: function($scope) {
        $scope.removeMessage = function(message) {
          notifying.removeMessage(message);
        }
      },
      link: function (scope) {
        scope.messageList = notifying.messageList;
      }
    }
  };

  module.directive("notification", notification);

}(angular.module("notification")));