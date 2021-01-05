'use strict';

const temperatureOps = {
  C: 'Celsius',
  K: 'Kelvin',
  F: 'Fahrenheit',
}

class AbstractTemperatureConverter {
  constructor(fromValue) {
    this.fromValue = fromValue;
  }

  convert(toOp) {
    switch (toOp) {
      case temperatureOps.C: return this.toCelsius();
      case temperatureOps.K: return this.toKelvin();
      case temperatureOps.F: return this.toFahrenheit();
    }
  }

  toCelsius() {
    throw new Error('Abstract method');
  }

  toKelvin() {
    throw new Error('Abstract method');
  }

  toFahrenheit() {
    throw new Error('Abstract method');
  }
}

class CelsiusConverter extends AbstractTemperatureConverter {
  constructor(fromValue) {
    super(fromValue);
  }

  // override
  toCelsius() {
    return this.fromValue;
  }

  // override
  toKelvin() {
    return this.fromValue + 273.15;
  }

  // override
  toFahrenheit() {
    return this.fromValue * 1.8 + 32;
  }
}

class KelvinConverter extends AbstractTemperatureConverter {
  constructor(fromValue) {
    super(fromValue);
  }

  // override
  toCelsius() {
    return this.fromValue - 273.15;
  }

  // override
  toKelvin() {
    return this.fromValue;
  }

  // override
  toFahrenheit() {
    return this.fromValue * 1.8 - 459.67;
  }
}

class FahrenheitConverter extends AbstractTemperatureConverter {
  constructor(fromValue) {
    super(fromValue);
  }

  // override
  toCelsius() {
    return (this.fromValue - 32) / 1.8;
  }

  // override
  toKelvin() {
    return (this.fromValue + 459.67) * (5/9);
  }

  // override
  toFahrenheit() {
    return this.fromValue;
  }
}

module.exports = {
  temperatureOps,
  CelsiusConverter,
  KelvinConverter,
  FahrenheitConverter,
}