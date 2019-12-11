$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temperature);
  update

  $('#temperature-up').on('click', function(){ // onclick of id temp-up (event listener)
    thermostat.up();//update model
    $('#temperature').text(thermostat.temperature);//updates view in the temperature id
  })

  $('#temperature-down').click(function() { // this is an alternate version of .on('click'), with a sprinkle of jQuery syntactic sugar
  thermostat.down();
  $('#temperature').text(thermostat.temperature);
})

  function updateTemperature() {
  $('#temperature').text(thermostat.temperature);
  }

})
