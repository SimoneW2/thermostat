'use strict';

describe('Thermostat', function(){
    var thermostat;

    beforeEach(function() {
      thermostat = new Thermostat(); //Creates a new instance of Thermostat that can be used throughout the block
    });

        //1
        it('The temparature starts at 20 degrees', function(){
          //expect(thermostat.temperature).toEqual(20);
          expect(thermostat.getCurrentTemperature()).toEqual(20);//A getter method is used to get the temperature getCurrentTemperature().
        });

        //2
        it('increases the temperature with up function', function(){
          thermostat.up(); //bind the thermostat instance to the up() function
          expect(thermostat.getCurrentTemperature()).toEqual(21);//Increment temperature by 1
        });

        //3
        it('decreases the temperature with a down function', function(){
          thermostat.down();
          expect(thermostat.getCurrentTemperature()).toEqual(19);
        });

        //Minimum of 10 degrees.
        //4.The temperature starts at 20 and needs to go down 11.
        it('has a minimum of 10 degrees', function(){
          for(var i = 0; i < 11; i++){// Shifts the temperature down to 10 degrees from 20 using the down function
            thermostat.down();
          }
          expect(thermostat.getCurrentTemperature()).toEqual(10);
        });

        //5.First need to turn the power saving mode on. Via boolean method.
        it('has power saving mode on by default', function(){
            expect(thermostat.isPowerSavingModeOn()).toBe(true);
        });

        //6.Turn power saving mode off
        it('can switch PSM off', function(){
          thermostat.switchPowerSavingModeOff();
          expect(thermostat.isPowerSavingModeOn()).toBe(false);
        });

        //7.Reverse the power saving method
        // spec/thermostatSpec.js

        it('can switch PSM back on', function() {
          thermostat.switchPowerSavingModeOff();
          expect(thermostat.isPowerSavingModeOn()).toBe(false);
          thermostat.switchPowerSavingModeOn();
          expect(thermostat.isPowerSavingModeOn()).toBe(true);
        });

        //8. Sets the temperature up  6 degrees
        describe('when power saving mode is on', function(){
           it('has a maximum temperature of 25 degrees', function(){
            for(var i = 0; i < 6; i++){
              thermostat.up();
            }
            expect(thermostat.getCurrentTemperature()).toEqual(25);
           });
        });

        //9 Counter Test- to make sure everything works and test should still pass
        describe('when power saving mode is off', function() {
          it('has a maximum temperature of 32 degrees', function() {
            thermostat.switchPowerSavingModeOff();
            for (var i = 0; i < 13; i++) {
              thermostat.up();
            }
            expect(thermostat.getCurrentTemperature()).toEqual(32);
          });
        });

        //10. Reset temperature back to 20
        it('can be reset to the default temperature', function(){
          for (var i = 0; i < 6; i++){
            thermostat.up();
          }
          thermostat.resetTemperature();
          expect(thermostat.getCurrentTemperature()).toEqual(20);
        });

        //11.Demonstrate where the energy unit sits.
        //Have a function that  outputs high-usage, medium-usage, aand low-usage
        describe('displaying usage levels', function() {
          describe('when the temperature is below 18 degrees', function() {
            it('it is considered low-usage', function() {
              for (var i = 0; i < 3; i++) {
                thermostat.down();
              }
              expect(thermostat.energyUsage()).toEqual('low-usage');
            });
          });

          describe('when the temperature is between 18 and 25 degrees', function() {
            it('it is considered medium-usage', function() {
              expect(thermostat.energyUsage()).toEqual('medium-usage');
            });
          });

          describe('when the temperature is anything else', function() {
            it('it is considered high-usage', function() {
              thermostat.powerSavingMode = false;
              for (var i = 0; i < 6; i++) {
                thermostat.up();
              }
              expect(thermostat.energyUsage()).toEqual('high-usage');
            });
          });
        });
});
