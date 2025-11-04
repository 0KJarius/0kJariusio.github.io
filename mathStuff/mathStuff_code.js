document.getElementById("input").addEventListener("keyup", function(){
    let number = document.getElementById("input").value*1;
    let operation = document.getElementById("operation").value;

    switch (operation) {
        case "factorial":
            calculateFactorial(number);
            break;
        case "sum":
            calculateSum(number);
            break;
        case "average":
            calculateAverage(number);
            break;
    
        default:
            break;
    }

});

function calculateFactorial(input){
    let Nextmult = input;
    let product = 1;

    while (Nextmult > 0){
        product *= Nextmult;
        Nextmult -= 1;
    }
    document.getElementById("output").value = product;
}

function calculateSum(input){
    let NextAdden = input;
    let sum = 0;

    do{
        sum += NextAdden;
        NextAdden -= 1;
    }while(NextAdden > 0);

    document.getElementById("output").value = sum;
}

function calculateAverage(input){
    let NextAdden = input;
    let sum = 0;
    let average = 0;

    for (let index = 0; index < input; index++) {
        sum += NextAdden;
        NextAdden -= 1;
    }

    average = sum/input;
    document.getElementById("output").value = average;
}

document.getElementById("returnButton").addEventListener("click", function() {
    location.href = "../index.html";
});