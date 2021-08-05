describe("Thermostat", () => { 
  beforeEach(() => { 
    thermostat = new Thermostat();
  })
  it ("does thing", () => {
    expect(thermostat.degrees).toEqual(20);
  });
});