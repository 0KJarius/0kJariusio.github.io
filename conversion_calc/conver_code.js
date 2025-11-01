function convert()
{
    let conversionType = document.getElementById("conversions").value;
    let numberInput = document.getElementById("conversionInput").value*1;

    switch (conversionType) {
        case "celcius_fahrenheit":
            celcius_fahrenheit(numberInput);
            break;
        case "fahrenheit_celcius":
            fahrenheit_celcius(numberInput);
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