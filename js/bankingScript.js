// getting amount from input field
function getAmount(inputId) {
    const amountText = document.getElementById(inputId).value;
    const amount = parseFloat(amountText);
    return amount;

}

// setting total deposit and withdraw amount
function setTotalAmount(inputId, amount) {
    const currentAmountText = document.getElementById(inputId).innerText;
    const currentAmount = parseFloat(currentAmountText);
    // const currentDepositAmount = getAmount('totalDepositAmount');
    // console.log('current', currentDeposit);
    let totalAmount = currentAmount + amount;
    document.getElementById(inputId).innerText = totalAmount;


}

// setting total balance amount
function setTotalBalanceAmount(inputId, category) {
    const currentBalanceText = document.getElementById('totalBalanceAmount').innerText;
    const currentBalanceAmount = parseFloat(currentBalanceText);
    if (category == 'deposit') {
        let totalBalanceAmount = currentBalanceAmount + inputId;
        document.getElementById('totalBalanceAmount').innerText = totalBalanceAmount;

    }

    if (category == 'withdraw') {
        let totalBalanceAmount = currentBalanceAmount - inputId;
        document.getElementById('totalBalanceAmount').innerText = totalBalanceAmount;
    }

}


// Updating Deposit and Balance amount from input field
document.getElementById('depositButton').addEventListener('click', function () {
    // gettng deposit amoiunt from deposit field 
    const depositAmount = getAmount('depositField');

    if (depositAmount > 0) {
        // setting deposit amount 
        setTotalAmount('totalDepositAmount', depositAmount);

        // clearing deposit input field 
        document.getElementById('depositField').value = '';

        // <-----------------updating total balance----------------->
        setTotalBalanceAmount(depositAmount, 'deposit');

    }

    else {
        alert('Wrong Input!')
    }
})




// <================Updating Withdraw and Balance amount from input field=================>



document.getElementById('withdrawButton').addEventListener('click', function () {


    // gettng withdraw amoiunt from withdraw field 
    const withdrawAmount = getAmount('withdrawField');
    const currentBalanceText = document.getElementById('totalBalanceAmount').innerText;
    const currentBalanceAmount = parseFloat(currentBalanceText);
    if (withdrawAmount > 0 && withdrawAmount < currentBalanceAmount) {
        // setting deposit amount 

        setTotalAmount('totalWithdrawAmount', withdrawAmount);

        // clearing deposit input field 
        document.getElementById('withdrawField').value = '';

        // // <-----------------updating total balance----------------->
        setTotalBalanceAmount(withdrawAmount, 'withdraw');

    }

    else {
        alert('Wrong Input!')

    }
})