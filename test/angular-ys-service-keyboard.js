(function() {
  'use strict';

  describe('Check angularYS.ServiceKeyboard', function() {

    beforeEach(angular.mock.module('angularYS.ServiceKeyboard'));

    // instantiate service
    var mockYSFactoryKeyboard;
    beforeEach(function() {

      mockYSFactoryKeyboard = {
        isCtrlA: function(e) {
          return e === 'A';
        },
        isCtrlC: function(e) {
          return e === 'C';
        },
        isCtrlX: function(e) {
          return e === 'X';
        },
        isCtrlV: function(e) {
          return e === 'V';
        }
      };

      angular.mock.module(function($provide) {
        $provide.value('ysFactoryKeyboard', mockYSFactoryKeyboard);
      });

    });

    describe('Check method isCtrlKeys', function() {

      it('Check A', inject(function(ysServiceKeyboard) {
        expect(ysServiceKeyboard.isCtrlKeys('A')).to.be.true;
      }));

      it('Check C', inject(function(ysServiceKeyboard) {
        expect(ysServiceKeyboard.isCtrlKeys('A')).to.be.true;
      }));

      it('Check X', inject(function(ysServiceKeyboard) {
        expect(ysServiceKeyboard.isCtrlKeys('A')).to.be.true;
      }));

      it('Check V', inject(function(ysServiceKeyboard) {
        expect(ysServiceKeyboard.isCtrlKeys('A')).to.be.true;
      }));

      it('Check Other', inject(function(ysServiceKeyboard) {
        expect(ysServiceKeyboard.isCtrlKeys('M')).to.be.false;
      }));

    });
    /*
        describe('Check method isOnlyNumber', function() {

          it('Check number', function() {
            var event = angular.element.Event("keyup");
            expect(ysServiceKeyboard.getStringCode(event)).to.equal('\u0000');
          });

          it('Check other', function() {
            var event = angular.element.Event("keyup");
            event.which = 0x31;
            expect(ysServiceKeyboard.getStringCode(event)).to.equal('1');
          });

        });

        describe('Check method isDecimalNumber', function() {

          it('Check number', function() {
            var event = angular.element.Event("keyup");
            event.keyCode = 0x61;
            event.ctrlKey = false;
            expect(ysServiceKeyboard.isCtrlA(event)).to.be.false;
          });

          it('Check dot', function() {
            var event = angular.element.Event("keyup");
            event.keyCode = 0x62;
            event.ctrlKey = true;
            expect(ysServiceKeyboard.isCtrlA(event)).to.be.false;
          });

          it('Check other', function() {
            var event = angular.element.Event("keyup");
            event.key = 'a';
            event.ctrlKey = true;
            expect(ysServiceKeyboard.isCtrlA(event)).to.be.true;
          });
        });
    */
  });
})();
