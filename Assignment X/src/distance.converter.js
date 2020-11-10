'use strict';

const distanceOps = {
  Km: 'Kilometers',
  Mi: 'Miles',
}

class AbstractDistanceConverter {
  constructor(fromValue) {
    this.fromValue = fromValue;
  }

  convert(toOp) {
    switch (toOp) {
      case distanceOps.Km: return this.toKilometers();
      case distanceOps.Mi: return this.toMiles();
    }
  }

  toKilometers() {
    throw new Error('Abstract method');
  }

  toMiles() {
    throw new Error('Abstract method');
  }
}

class KilometerConverter extends AbstractDistanceConverter {
  constructor(fromValue) {
    super(fromValue);
  }

  // override
  toKilometers() {
    return this.fromValue;
  }

  // override
  toMiles() {
    return (this.fromValue / 1.609344).toFixed(3);
  }
}

class MilesConverter extends AbstractDistanceConverter {
  constructor(fromValue) {
    super(fromValue);
  }

  // override
  toKilometers() {
    return (this.fromValue * 1.609344).toFixed(3);
  }

  // override
  toMiles() {
    return this.fromValue;
  }
}

module.exports = {
  distanceOps,
  KilometerConverter,
  MilesConverter,
}