"use strict";

class Thermostat { 
  constructor() { 
  this.degrees = 20;
  this.powerSaveMode = true
  }

  up() {
    this.powerSaveCheck()
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

  powerSaveCheck() {
    if (this.powerSaveMode === true && this.degrees === 25) {
      throw('Max reached (Power Saving Mode on)')
    }
    else if (this.powerSaveMode === false && this.degrees === 32){
      throw('Max reached (Power Saving Mode off)')
    }
  }

  powerSaveOff() {
    this.powerSaveMode = false
  }

  powerSaveOn() {
    this.powerSaveMode = true
  }
}
