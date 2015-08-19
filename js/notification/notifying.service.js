"use strict";

(function(module) {

  var notifying = function() {

    var messageList = [];
    var messageTypes = ["success", "info", "warning", "danger"];

    var addWarning = function(message) {
      addMessage("warning", message);
    };

    var addDanger = function(message) {
      addMessage("danger", message);
    };

    var addInfo = function(message) {
      addMessage("info", message);
    };

    var addSuccess = function(message) {
      addMessage("success", message);
    };

    var addMessage = function (type, message) {
        messageList.push({ type: type, message: message });
    };

    var removeMessage = function(message) {
      for (var i = 0; i < messageList.length; i++) {
        if (messageList[i] === message) {
          messageList.splice(i, 1);
          break;
        }
      }
    };

    return {
      addWarning: addWarning,
      addDanger: addDanger,
      addInfo: addInfo,
      addSuccess: addSuccess,
      addMessage: addMessage,
      removeMessage: removeMessage,
      messageList: messageList,
      messageTypes: messageTypes
    };
  };

  module.factory("notifying", notifying);

}(angular.module("notification")));
