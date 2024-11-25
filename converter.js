document.getElementById("convertButton").addEventListener("click", function () {
    const inputTemperature = parseFloat(document.getElementById("temperatureInput").value);
    const inputUnit = document.getElementById("unitSelect").value;

    const resultOutput = document.getElementById("resultOutput");

    // Validate the input
    if (isNaN(inputTemperature)) {
        resultOutput.textContent = "Please enter a valid number.";
        return;
    }

    // Perform conversions
    let celsius, fahrenheit, kelvin;

    if (inputUnit === "Celsius") {
        celsius = inputTemperature;
        fahrenheit = (celsius * 9) / 5 + 32;
        kelvin = celsius + 273.15;
    } else if (inputUnit === "Fahrenheit") {
        fahrenheit = inputTemperature;
        celsius = (fahrenheit - 32) * 5 / 9;
        kelvin = celsius + 273.15;
    } else if (inputUnit === "Kelvin") {
        kelvin = inputTemperature;
        celsius = kelvin - 273.15;
        fahrenheit = (celsius * 9) / 5 + 32;
    }

    // Display the result
    resultOutput.innerHTML = `
        <p>${celsius.toFixed(2)} °C</p>
        <p>${fahrenheit.toFixed(2)} °F</p>
        <p>${kelvin.toFixed(2)} K</p>
    `;
});
