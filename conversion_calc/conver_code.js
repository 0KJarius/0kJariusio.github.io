document.getElementById("conversions").addEventListener("mouseup", function() {
    let selectedConversion = document.getElementById("conversions").value;

    switch (selectedConversion) {
        case "celcius_fahrenheit":
            document.getElementById("unitOne").innerHTML = "Celcius";
            document.getElementById("unitTwo").innerHTML = "Fahrenheit";
            break;
        case "fahrenheit_celcius":
            document.getElementById("unitOne").innerHTML = "Fahrenheit";
            document.getElementById("unitTwo").innerHTML = "Celcius";
            break;
        case "meters_feet":
            document.getElementById("unitOne").innerHTML = "Meters";
            document.getElementById("unitTwo").innerHTML = "Feet";
            break
        case "feet_meters":
            document.getElementById("unitOne").innerHTML = "Feet";
            document.getElementById("unitTwo").innerHTML = "Meters";
            break;
    }
});




function convert()
{
    let conversionType = document.getElementById("conversions").value;
    let numberInput = document.getElementById("conversionInput").value*1;

    switch (conversionType) {
        case "celcius_fahrenheit":
            celcius_fahrenheit(numberInput);
            document.getElementById("unitOne").innerHTML = "Celcius";
            document.getElementById("unitTwo").innerHTML = "Fahrenheit";
            break;
        case "fahrenheit_celcius":
            fahrenheit_celcius(numberInput);
            document.getElementById("unitOne").innerHTML = "Celcius";
            document.getElementById("unitTwo").innerHTML = "Fahrenheit";
            break;
        case "meters_feet":
            meters_feet(numberInput);
            break
        case "feet_meters":
            feet_meters(numberInput);
            break;
    }
}

function celcius_fahrenheit(input){
    let fahrenheit = ((input * 9) / 5) + 32;
    document.getElementById("conversionOutput").value = fahrenheit;

}

function fahrenheit_celcius(input){
    let celcius = (input - 32)/ 1.8;
    document.getElementById("conversionOutput").value = celcius;
}

function meters_feet(input){
    let feet = input * 3.280;
    document.getElementById("conversionOutput").value = feet;
}

function feet_meters(input){
    let meters = input * 0.3048;
    document.getElementById("conversionOutput").value = meters;
}

document.getElementById("returnButton").addEventListener("click", function() {
    location.href = "../index.html";
});