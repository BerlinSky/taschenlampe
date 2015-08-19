"use strict";

(function(module) {

  module.config(function($provide) {

    $provide.decorator("$exceptionHandler", function($delegate, $injector) {
      return function(exception, cause) {
        $delegate(exception, cause);

        var notifying = $injector.get("notifying");
        notifying.addDanger(exception.message);
      }
    })

  });

}(angular.module("notification")));
