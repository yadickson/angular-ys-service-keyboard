(function() {
  'use strict';

  /**
   * @ngdoc service
   * @name angularYS.ysServiceKeyboard
   * @description Angular Service To check Event Press Keyboard Button
   * # ysServiceKeyboard
   * Service in the angularYS.
   */
  angular.module('angularYS.ServiceKeyboard', ['angularYS.FactoryKeyboard'])
    .service('ysServiceKeyboard', keyboard);

 keyboard.$inject = ['ysFactoryKeyboard'];

  function keyboard(ysFactoryKeyboard) {

    return {
      isCtrlKeys: isCtrlKeys,
      isOnlyNumber: isOnlyNumber,
      isDecimalNumber: isDecimalNumber
    };

    function isCtrlKeys(e) {
      return ysFactoryKeyboard.isCtrlA(e) || ysFactoryKeyboard.isCtrlC(e) || ysFactoryKeyboard.isCtrlX(e) || ysFactoryKeyboard.isCtrlV(e);
    }

    function isOnlyNumber(e) {
      return ysFactoryKeyboard.isNumericKey(e) || ysFactoryKeyboard.isNavegationKey(e) || ysFactoryKeyboard.isClearKey(e);
    }

    function isDecimalNumber(e) {
      return isOnlyNumber(e) || ysFactoryKeyboard.isDotKey(e);
    }

  }

})();
