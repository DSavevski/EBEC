(function() {
    'use strict'
    angular.module('LanCheck', [])
    .controller('LanController', LanController);
    LanController.$inject = [];

    function LanController() {
      var lctrl = this;

      lctrl.click = function (index) {
        if(index === 1){
          lctrl.page = "";
        }else{
          lctrl.page = "_en";
        }
      };

    }

})();
