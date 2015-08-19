"use strict";

(function(module){

  var notificationLandingController = function(notifying) {
    var model = this;

    model.messageTypes = notifying.messageTypes;
    model.messageType = model.messageTypes[0];
    model.notificationMessage = "";

    model.createNotification = function() {
      notifying.addMessage(model.messageType, model.notificationMessage);
      model.notificationMessage = "";
      model.messageType = model.messageTypes[0];
    };

    model.createException = function() {

      throw new Error("An application error has appeared ...");
    };

  };

  module.controller("notificationLandingController", notificationLandingController);

}(angular.module("app")));