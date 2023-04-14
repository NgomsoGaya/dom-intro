// get a reference to the textbox where the bill type is to be entered
const billTypeText = document.querySelector(".billTypeText")	
//get a reference to the add button
const addToBillBtn = document.querySelector(".addToBillBtn")	
//create a variable that will keep track of the total bill
const callTotalOne = document.querySelector(".callTotalOne")
const smsTotalOne = document.querySelector(".smsTotalOne")	
const totalOne = document.querySelector(".totalOne")
//add an event listener for when the add button is pressed
var callsTotal = 0;
var smsTotal = 0;

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
function textBillTotal(){
    // get the value entered in the billType textfield
    var billTypeEntered = billTypeText.value.trim();
    // update the correct total
    if (billTypeEntered.toLowerCase() === "call"){
        callsTotal += 2.75
        document.querySelector(".validationOne").innerHTML = ""
    }
    else if (billTypeEntered.toLowerCase()=== "sms"){
        smsTotal += 0.75;
        document.querySelector(".validationOne").innerHTML = ""
    }
    else if (billTypeEntered.toLowerCase() !== "call" || billTypeEntered.toLowerCase()!== "sms"){
        document.querySelector(".validationOne").innerHTML = "Please input call or sms only"
        
    }
    //update the totals that is displayed on the screen.
    callTotalOne.innerHTML = callsTotal.toFixed(2);
    smsTotalOne.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalOne.innerHTML = totalCost.toFixed(2);
     
     //color the total based on the criteria
     if (totalCost >= 50){
         // adding the danger class will make the text red
         totalOne.classList.add("danger");
     }
     else if (totalCost >= 30){
         totalOne.classList.add("warning");
     }
}

addToBillBtn.addEventListener('click', textBillTotal);