confirm ('The Kelvin Weather App')

const kelvin = prompt('What is the Kelvin temperature today in your area?');

// prompt is used to interactively ask users for input. this saves into the kelvin variable.
const celsius = kelvin - 273;
// celsius is now invariably the difference of 294 - 273

let fahrenheit =  celsius * (9/5) + 32;
//fahrenheit takes celsius * (9/5) + 32 as its value
fahrenheit = Math.floor( fahrenheit);
// here we round up fahrenheit using the Math.floor and save it back into the variable.
console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`);
// logging to the console with console.log and interpolating with ${fahrenheit}.
