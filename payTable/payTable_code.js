
const employee = {
    name: "name", 
    daysWorked: 1, 
    dailyRate: 1, 
    grossPay: 0,
    deduct: 1, 
    netPay: 0
};

let employeeNumber = 0
let employeeIndex = 0;

let payrollTable = document.getElementById("payrollTable");


document.getElementById("addButton").addEventListener("click", ()=>{
    let newRow = payrollTable.insertRow(-1);

    employee.name = document.getElementById("employeeName").value;
    employee.daysWorked = document.getElementById("daysWorked").value;
    employee.dailyRate = document.getElementById("dailyRate").value;
    employee.deduct = document.getElementById("deduct").value;
    employee.grossPay = employee.daysWorked * employee.dailyRate;
    employee.netPay = employee.grossPay - employee.deduct;

    indexCell = newRow.insertCell(0);
    let i = 1;
    for (const[key, value] of Object.entries(employee)){
        indexCell = newRow.insertCell(i);
        
        if(i === 4){
            indexCell.innerHTML = employee.grossPay;
        }else if(i === 6){
            indexCell.innerHTML = employee.netPay;
        } else{
            indexCell.innerHTML = value;
        }
        
        console.log(key + ": " + value);
        i++;
    }
});

document.getElementById("deleteButton").addEventListener("click", ()=>{
    employeeIndex = document.getElementById("employeeIndex").value;

    if(employeeIndex == 0){
        return;
    } 
    payrollTable.deleteRow(employeeIndex); 

});