const convertBtn = document.getElementById('convert');
const fromInput = document.getElementById('finput');
const toInput = document.getElementById('tinput');

const fromTemp = document.getElementById('finputtemp');
const toTemp = document.getElementById('tinputtemp');

convertBtn.addEventListener('click', function() {
  const from = fromInput.value;
  const fromCelsius = fromTemp.innerText.split(' ')[1] === 'Celsius';
  
  if (fromCelsius) {
    toInput.value = from * 1.8 + 32;
  } else {
    toInput.value = (from - 32) * 0.5556;
  }
});

const swapBtn = document.getElementById('swap');
swapBtn.addEventListener('click', function() {
  const temp = fromTemp.innerText;
  fromTemp.innerText = toTemp.innerText;
  toTemp.innerText = temp;
});