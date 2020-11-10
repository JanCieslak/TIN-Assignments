const { distanceOps, KilometerConverter, MilesConverter } = require('./distance.converter.js');
const { temperatureOps, CelsiusConverter, KelvinConverter, FahrenheitConverter } = require('./temperature.converter.js');

class Converter {
  constructor(fromOp, toOp, fromValue) {
    this.fromOp = fromOp;
    this.toOp = toOp;
    this.fromValue = fromValue;
  }

  convert() {
    throw new Error('Abstract method');
  }
}

'use strict';

class DistanceConverter extends Converter {
  constructor(fromOp, toOp, fromValue) {
    super(fromOp, toOp, fromValue);
  }

  convert() {
    switch (this.fromOp) {
      case distanceOps.Km: return new KilometerConverter(this.fromValue).convert(this.toOp);
      case distanceOps.Mi: return new MilesConverter(this.fromValue).convert(this.toOp);
    }
  }
}

class TemperatureConverter extends Converter {
  constructor(fromOp, toOp, fromValue) {
    super(fromOp, toOp, fromValue);
  }

  convert() {
    switch (this.fromOp) {
      case temperatureOps.C: return new CelsiusConverter(this.fromValue).convert(this.toOp);
      case temperatureOps.K: return new KelvinConverter(this.fromValue).convert(this.toOp);
      case temperatureOps.F: return new FahrenheitConverter(this.fromValue).convert(this.toOp);
    }
  }
}

module.exports = {
  DistanceConverter,
  TemperatureConverter,
}