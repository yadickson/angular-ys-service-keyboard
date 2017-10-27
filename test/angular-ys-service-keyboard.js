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
                },
                isNumericKey: function(e) {
                    return e === 'N';
                },
                isNavegationKey: function(e) {
                    return e === 'NK';
                },
                isClearKey: function(e) {
                    return e === 'Clear';
                },
                isDotKey: function(e) {
                    return e === 'Dot';
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

        describe('Check method isOnlyNumber', function() {

            it('Check number', inject(function(ysServiceKeyboard) {
                expect(ysServiceKeyboard.isOnlyNumber('N')).to.be.true;
            }));

            it('Check navegation key', inject(function(ysServiceKeyboard) {
                expect(ysServiceKeyboard.isOnlyNumber('NK')).to.be.true;
            }));

            it('Check clear key', inject(function(ysServiceKeyboard) {
                expect(ysServiceKeyboard.isOnlyNumber('Clear')).to.be.true;
            }));

            it('Check other', inject(function(ysServiceKeyboard) {
                expect(ysServiceKeyboard.isOnlyNumber('Other')).to.be.false;
            }));

        });

        describe('Check method isDecimalNumber', function() {

            it('Check number', inject(function(ysServiceKeyboard) {
                expect(ysServiceKeyboard.isDecimalNumber('N')).to.be.true;
            }));

            it('Check dot', inject(function(ysServiceKeyboard) {
                expect(ysServiceKeyboard.isDecimalNumber('Dot')).to.be.true;
            }));

            it('Check other', inject(function(ysServiceKeyboard) {
                expect(ysServiceKeyboard.isDecimalNumber('Other')).to.be.false;
            }));

        });

    });
})();