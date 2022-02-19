// deposit & withdraw & balance card 
let deposit = document.getElementById('deposit');
let withdraw = document.getElementById('withdraw');
let balance = document.getElementById('balance');



// create a function and reduce code 
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const valueText = inputField.value;
    // remove value
    inputField.value = "";
    return valueText;
}

function updateValue(Value, textValue, isAdd) {
    const previousValue = parseFloat(textValue.innerText);
    const newValue = parseFloat(Value);
    textValue.innerText = previousValue + newValue;

    //set balance 
    const balanceText = balance.innerText;
    const newBalance = parseFloat(balanceText);
    if (isAdd == true) {
        balance.innerText = newBalance + newValue;
    } else {
        balance.innerText = newBalance - newValue;
    }
}

// Error handling function 
function errorHandle(depositValue) {
    const inputField = document.getElementById(depositValue);
    const valueText = inputField.value;
    return valueText;
}


// Deposit & Withdraw 

// Deposit
const depositButton = document.getElementById('deposit-btn');
depositButton.addEventListener('click', function() {
    // call for error handle 
    const valueText = errorHandle('deposit-value')

    if (valueText > 0 && valueText <= 10000) {
        const depositValue = getInputValue('deposit-value', 'Deposit');
        updateValue(depositValue, deposit, true);
    } else {
        const inputField = document.getElementById('deposit-value');
        inputField.value = '';
    }



})


// withdraw 
const withdrawButton = document.getElementById('withdraw-btn');
withdrawButton.addEventListener('click', function() {
    // call for error handle 
    const valueText = errorHandle('withdraw-value')

    const withdrawAmount = parseFloat(balance.innerText);
    if (valueText > withdrawAmount) {
        alert("Error! You can't withdraw right now!!")
    } else if (valueText > 0 && valueText <= 10000) {

        const withdrawValue = getInputValue('withdraw-value', 'Withdraw');
        updateValue(withdrawValue, withdraw, false);
    } else {
        const inputField = document.getElementById('withdraw-value');
        inputField.value = '';
    }


})