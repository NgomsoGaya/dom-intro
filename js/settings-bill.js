// get a reference to the sms or call radio buttons
const billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings")
// get refences to all the settings fields
const callCostSetting = document.querySelector(".callCostSetting")
const callSettingElement = document.querySelector(".callTotalSettings")
const smsSettingElement = document.querySelector(".smsTotalSettings")
const totalElement = document.querySelector(".totalSettings")

const smsCostSetting = document.querySelector(".smsCostSetting")
const warningLevelSetting = document.querySelector(".warningLevelSetting")
const criticalLevelSetting = document.querySelector(".criticalLevelSetting")
//get a reference to the add button
const addButton = document.querySelector(".addButton")
//get a reference to the 'Update settings' button
const updateSettings = document.querySelector(".updateSettings")
// create a variables that will keep track of all the settings
var callCost3= 0
var smsCost3 = 0
var warningLevel = 0
var criticalLevel = 0
// create a variables that will keep track of all three totals.
var callTotallThree = 0
var smsTotalThree = 0
var totalThree = 0
//add an event listener for when the 'Update settings' button is pressed
function updateClicked() {

    callCost3 = callCostSetting.value
    smsCost3 = smsCostSetting.value
    warningLevel = warningLevelSetting.value
    criticalLevel = criticalLevelSetting.value


}
updateSettings.addEventListener('click', updateClicked)
//add an event listener for when the add button is pressed
function addClicked() {
    var checkedRadioBtn = document.querySelector("input[class='billItemTypeWithSettings']:checked");
    if (checkedRadioBtn) {
        var inputOfChecked = checkedRadioBtn.value;
        if (inputOfChecked == 'sms') {
            smsTotalThree += parseFloat(smsCost3)
        }

        else if (inputOfChecked == 'call') {
            callTotallThree += parseFloat(callCost3)
        }


        totalThree = callTotallThree + smsTotalThree

        callSettingElement.innerHTML = callTotallThree.toFixed(2)
        smsSettingElement.innerHTML = smsTotalThree.toFixed(2)
        totalElement.innerHTML = totalThree.toFixed(2)

        if (totalThree >= criticalLevelSetting.value) {
            totalElement.classList.add("danger");
            addButton.disabled = true
        }
        else if (totalThree >= warningLevelSetting.value) {
            totalElement.classList.add("warning");
            addButton.disabled = false
        }
    }
}
addButton.addEventListener('click', addClicked)
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
