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
    throw new Error('Abstract method');
  }

  // override
  toFahrenheit() {
    throw new Error('Abstract method');
  }
}

class KelvinConverter extends AbstractTemperatureConverter {
  constructor(fromValue) {
    super(fromValue);
  }

  // override
  toCelsius() {
    throw new Error('Abstract method');
  }

  // override
  toKelvin() {
    return this.fromValue;
  }

  // override
  toFahrenheit() {
    throw new Error('Abstract method');
  }
}

class FahrenheitConverter extends AbstractTemperatureConverter {
  constructor(fromValue) {
    super(fromValue);
  }

  // override
  toCelsius() {
    throw new Error('Abstract method');
  }

  // override
  toKelvin() {
    throw new Error('Abstract method');
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