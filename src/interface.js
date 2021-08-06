document.addEventListener('DOMContentLoaded', function(event) {
  const tempUp = document.getElementById("tempup");
  const tempDown = document.getElementById("tempdown");
  const powerSaveOn = document.getElementById("pson")
  const powerSaveOff = document.getElementById("psoff")


  const thermostat = new Thermostat();

  tempUp.addEventListener("click",function() {
    console.log(thermostat.degrees)
    thermostat.up()
    document.getElementById("temperature").innerHTML = thermostat.degrees;
  });
  tempDown.addEventListener("click",function() {
    console.log(thermostat.degrees)
    thermostat.down()
    document.getElementById("temperature").innerHTML = thermostat.degrees;
  });
  powerSaveOn.addEventListener("click",function() {
    thermostat.powerSaveOn()
    document.getElementById("powersaving").innerHTML = thermostat.powerSaveMode;
  });

  powerSaveOff.addEventListener("click",function() {
    thermostat.powerSaveOff()
    document.getElementById("powersaving").innerHTML = thermostat.powerSaveMode;
  });

  document.getElementById("temperature").innerHTML = thermostat.degrees;
  document.getElementById("powersaving").innerHTML = thermostat.powerSaveMode;
});