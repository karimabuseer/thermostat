"use strict";
describe("Thermostat", () => {
  
  let thermostat; 

  beforeEach(() => { 
    thermostat = new Thermostat();
  })

  it ("does thing", () => {
    expect(thermostat.degrees).toEqual(20);
  });

  it ("can increase temp", () => {
    thermostat.up();
    expect(thermostat.degrees).toEqual(21);
  });

  it ("can decrease temp", () => {
    thermostat.down();
    expect(thermostat.degrees).toEqual(19);
  });

  it ("cannot be decreased below 10 degrees", () => {
    thermostat.degrees = 10;
    expect(function() { thermostat.down() }).toThrow('Can\'t go below 10 degrees.')
  });

  it ("cannot turn temp above 25 when power save is on", () => {
    thermostat.powerSaveMode = true;
    thermostat.degrees = 25;
    expect(function() { thermostat.up() }).toThrow('Max reached (Power Saving Mode on)')
  });

  it ("cannot turn temp above 32 when power save is off", () => {
    thermostat.powerSaveMode = false;
    thermostat.degrees = 32;
    expect(function() {thermostat.up() }).toThrow('Max reached (Power Saving Mode off)')
  });

  it ("starts with power saving mode on, but can be turned off", () => {
    expect(thermostat.powerSaveMode).toEqual(true)
    thermostat.powerSaveOff();
    expect(thermostat.powerSaveMode).toEqual(false)
  });

  it ("you can reset to the default temperature(20)", () => {
    thermostat.reset()
    expect(thermostat.degrees).toEqual(20)
  });
});