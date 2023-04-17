//get a reference to the calculate button
const calculateBtnElement = document.querySelector(".calculateBtn")

//get a reference to the billTotal element
const billTotalElement = document.querySelector(".billTotal")

//get a reference to the billString
const billStringElement = document.querySelector(".billString")

//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

function calculateBtnClicked() {

    var total = 0;
    var callsAndSms = billStringElement.value
    var callSmsList = callsAndSms.split(",");

    for (var i = 0; i < callSmsList.length; i++) {
        var phoneBillList = callSmsList[i].trim();
        if (phoneBillList.toLowerCase() == "sms") {
            total += 0.65;
        }
        else if (phoneBillList.toLowerCase() == "call") {
            total += 2.75;
        }
    }
    billTotalElement.innerHTML = total.toFixed(2)
    if (total >= 30.00){
        billTotalElement.classList.add("danger")
    }
    else if (total >= 20.00 ){
        billTotalElement.classList.remove("danger")
        billTotalElement.classList.add("warning");
    }
    else if (total < 20.00){
        billTotalElement.classList.remove("warning")
    }
}

calculateBtnElement.addEventListener('click', calculateBtnClicked) 

//link the function to a click event on the calculate button