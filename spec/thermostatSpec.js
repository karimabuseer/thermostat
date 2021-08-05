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
});