// get a reference to the sms or call radio buttons	
const billItemTypeRadio = document.querySelector(".billItemTypeRadio")
//get a reference to the add button	
const addBtn = document.querySelector(".radioBillAddBtn")
//create a variable that will keep track of the total bill
const callTotalTwo = document.querySelector(".callTotalTwo")
const smsTotalTwo = document.querySelector(".smsTotalTwo")
const totalTwo = document.querySelector(".totalTwo")
//add an event listener for when the add button is pressed
var callsTotal = 0;
var smsTotal = 0;
function radioBill(){
var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
if (checkedRadioBtn){
    var billItemType = checkedRadioBtn.value
    // billItemType will be 'call' or 'sms'
}
if (billItemType == "call"){
    callsTotal += 2.75
}
else if (billItemType == "sms"){
    smsTotal += 0.75
}
    callTotalTwo.innerHTML = callsTotal.toFixed(2);
    smsTotalTwo.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalTwo.innerHTML = totalCost.toFixed(2)

    //color the total based on the criteria
    if (totalCost >= 50){
        // adding the danger class will make the text red
        totalTwo.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalTwo.classList.add("warning");
    }
}
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
addBtn.addEventListener('click',radioBill)