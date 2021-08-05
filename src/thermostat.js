"use strict";

class Thermostat { 
  constructor() { 
  this.degrees = 20;
  }

  up() {
    this.degrees += 1; 
  }

  down() {
    this.minCheck()
    this.degrees -= 1;
  }

  minCheck() {
    if (this.degrees === 10)
    throw('Can\'t go below 10 degrees.')
  }
}