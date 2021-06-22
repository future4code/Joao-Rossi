/* 

Fórmulas para o desafio:
(KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15
(GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32

*/

// Parte A do Desafio:

const temperaturaFahrenheit = 77

const temperaturaKelvin = (temperaturaFahrenheit - 32) * (5 / 9) + 273.15

console.log(`A temperatura em Kelvin é: ${temperaturaKelvin} K.`)


// Parte B do Desafio:

const temperaturaCelsius = 80

const temperaturaFahrenheit2 = temperaturaCelsius * (9/5) + 32

console.log(`A temperatura em Fahrenheit é: ${temperaturaFahrenheit2}°F.`)


// Parte C do Desafio:

const temperaturaCelsius2 = 30

const temperaturaFahrenheit3 = temperaturaCelsius2 * (9/5) + 32

const temperaturaKelvin2 = (temperaturaFahrenheit3 - 32) * (5/9) + 273.15

console.log(`A temperatura em Fahrenheit é: ${temperaturaFahrenheit3} °F;
A temperatura em Kelvin é: ${temperaturaKelvin2} K.`)


// Parte D do Desafio:

const temperaturaCelsius3 = Number(prompt(`Insira a temperatura em °C que deseja conventer:`))

const temperaturaFahrenheit4 = temperaturaCelsius3 * (9/5) + 32

const temperaturaKelvin3 = (temperaturaFahrenheit4 - 32) * (5/9) + 273.15

console.log(`A temperatura em Fahrenheit é: ${temperaturaFahrenheit4} °F;
A temperatura em Kelvin é: ${temperaturaKelvin3} K.`)