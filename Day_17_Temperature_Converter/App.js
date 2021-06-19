// vars
const celcius = document.getElementById('celcius');
const fahrenheit = document.getElementById('fahrenheit');
const kelvin = document.getElementById('kelvin');
const inputs = document.getElementsByTagName('input');

// loop though inputs
for (let i = 0; i < inputs.length; i++) {
  const input = inputs[i];

  input.addEventListener('input', (event) => {
    const { value, name } = event.target;
    switch (name) {
      case 'celcius':
        fahrenheit.value = value * 1.8 + 32;
        kelvin.value = value + 273.15;
        break;
      case 'fahrenheit':
        celcius.value = (value - 32) / 1.8;
        kelvin.value = (value - 32) / 1.8 + 273.15;
        break;
      case 'kelvin':
        celcius.value = value - 273.15;
        fahrenheit.value = (value - 273.15) * 1.8 + 32;
        break;
    }
  });
}
