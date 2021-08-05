describe("Thermostat", () => { 
  beforeEach(() => { 
    thermostat = new Thermostat();
  })
  it ("does thing", () => {
    expect(thermostat.degrees).toEqual(20);
  });
  it ("can increase temp", () => {
    thermostat.up()
    expect(thermostat.degrees).toEqual(21);
  });
  it ("can decrease temp", () => {
    thermostat.down()
    expect(thermostat.degrees).toEqual(19);
  });
  it ("cannot be decreased below 10 degrees", () => {
    thermostat.degrees = 10
    expect(function() { thermostat.down() }).toThrow('Can\'t go below 10 degrees.')
  });
});