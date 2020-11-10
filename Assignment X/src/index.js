'use strict';

const convertBtn = document.getElementById('convertBtn');

const from = document.getElementById('from');
const fromOp = document.getElementById('fromOp');
const to = document.getElementById('to');
const toOp = document.getElementById('toOp');

const { DistanceConverter, TemperatureConverter } = require('./converter.js');

convertBtn.onclick = () => {
  const fromOptCode = fromOp[fromOp.selectedIndex].parentNode.label;
  const toOptCode = toOp[toOp.selectedIndex].parentNode.label;
  
  // TODO: Better design

  if (fromOptCode === toOptCode) {
    switch (fromOptCode) {
      case 'Temperature': 
        to.value = new TemperatureConverter(fromOp.value, toOp.value, from.value).convert();
      break;

      case 'Distance':
        to.value = new DistanceConverter(fromOp.value, toOp.value, from.value).convert();
      break;
    }
  } else {
    // TODO
  }
}