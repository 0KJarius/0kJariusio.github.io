document.getElementById("income").addEventListener("keyup", function() {

    let income = document.getElementById("income").value*1;
    let percentage = 0;
    let bonus = 0;
    let min = 0;
        
    if ((income >= 250000) && (income <= 400000)){
        percentage = 20;
        bonus = 0;
        min = 250000;
        
    } else if ((income >= 400000) && (income <= 800000)){
        percentage = 25;
        bonus = 30000;
        min = 400000;
        

    } else if ((income >= 800000) && (income <= 2000000)){
        percentage = 30;
        bonus = 130000;
        min = 800000;

    } else if ((income >= 2000000) && (income <= 8000000)){
        percentage = 32;
        bonus = 490000;
        min = 2000000;

    } else if (income >= 8000000){
        percentage = 35;
        bonus = 2410000;
        min = 8000000;
    } 

    calculateIncomeTax(percentage, bonus, min, income);
});

function calculateIncomeTax(percentage, bonus, min, income){
    let percent = percentage / 100;
    let deduct = income - min;

    let tax = (percent * deduct) + bonus;

    document.getElementById("income_tax").value = tax;
}

document.getElementById("returnButton").addEventListener("click", function() {
    document.location="../index.html";
    console.log("click");
    alert("yea");
});