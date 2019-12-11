'use strict';

//First test - Temperature starts at 20
function Thermostat(){
  this.MINIMUM_TEMPERATURE = 10;//Intended constant
  this.temperature = 20;
  this.powerSavingMode = true;//Sets the power saving mode as on
  this.MAX_LIMIT_PSM_ON = 25; //8
  this.MAX_LIMIT_PSM_OFF = 32;//8
  this.DEFAULT_TEMPERATURE = 20;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18;//11,12,13
}
//Creates an instance of the Thermostat function binding the getCurrentTemperature function
Thermostat.prototype.getCurrentTemperature = function() {// prototype stores the function for the object in question.
  return this.temperature;
};

// //2.Second tdd test pass - up function
// Thermostat.prototype.up = function(){
//   this.temperature += 1;
// };

//2. Refactored 8
Thermostat.prototype.up = function() {
  if (this.isMaximumTemperature()) {
    return;
  }
  this.temperature += 1;
}

// //3.Third tdd test pass- down function
// Thermostat.prototype.down = function(){
//   this.temperature -=1;
// };

//3.Third test refactored.
Thermostat.prototype.down = function(){
  if(this.isMinimumTemperature()){
    return;
  }
  this.temperature -=1;
}


//Boolean method to check if minimum temperature is set
Thermostat.prototype.isMinimumTemperature = function(){
  return this.temperature === this.MINIMUM_TEMPERATURE;
}

//Turn psm on - Pass Test Getter method gets returns this from the Thermostat function to turn on power saving mode
Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode === true;
}

//Turn psm off pass test
Thermostat.prototype.switchPowerSavingModeOff = function(){
  this.powerSavingMode = false;
}

//Turn the power saving mode back on. Test 7
Thermostat.prototype.switchPowerSavingModeOn = function() {
  this.powerSavingMode = true;
}

//8. Refactored 2


//8
Thermostat.prototype.isMaximumTemperature = function() {
  if (this.isPowerSavingModeOn() === false) {
    return this.temperature === this.MAX_LIMIT_PSM_OFF;
  }
  return this.temperature === this.MAX_LIMIT_PSM_ON;
}

//9 doesn't exist

//10
Thermostat.prototype.resetTemperature = function(){
  this.temperature = 20;
}

//10. Refactored
Thermostat.prototype.resetTemperature = function() {
  this.temperature = this.DEFAULT_TEMPERATURE;
}

//11.
Thermostat.prototype.energyUsage = function() {
  if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
    return 'low-usage';
  }
  if (this.temperature >= this.MEDIUM_ENERGY_USAGE_LIMIT && this.temperature <= this.MAX_LIMIT_PSM_ON) {
    return 'medium-usage';
  }
  return 'high-usage';
}
