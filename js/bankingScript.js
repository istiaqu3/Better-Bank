// Updating Deposit and Balance amount from input field
document.getElementById('depositButton').addEventListener('click', function () {


    // gettng deposit amoiunt from deposit field 
    const depositAmountText = document.getElementById('depositField').value;
    depositAmount = parseFloat(depositAmountText);
    // console.log('from field', depositAmount);

    // setting deposit amount 

    const currentDepositText = document.getElementById('totalDepositAmount').innerText;
    const currentDepositAmount = parseFloat(currentDepositText);
    // console.log('current', currentDeposit);
    let totalDepositAmount = currentDepositAmount + depositAmount;
    document.getElementById('totalDepositAmount').innerText = totalDepositAmount;

    // clearing deposit input field 
    document.getElementById('depositField').value = '';



    // <-----------------updating total balance----------------->

    const currentBalanceText = document.getElementById('totalBalanceAmount').innerText;
    const currentBalanceAmount = parseFloat(currentBalanceText);
    let totalBalanceAmount = currentBalanceAmount + depositAmount;
    document.getElementById('totalBalanceAmount').innerText = totalBalanceAmount;

})




// <================Updating Withdraw and Balance amount from input field=================>



document.getElementById('withdrawButton').addEventListener('click', function () {


    // gettng withdraw amoiunt from withdraw field 
    const withdrawAmountText = document.getElementById('withdrawField').value;
    withdrawAmount = parseFloat(withdrawAmountText);
    // console.log('from field', withdrawAmount);

    // setting deposit amount 

    const currentWithdrawText = document.getElementById('totalWithdrawAmount').innerText;
    const currentWithdrawAmount = parseFloat(currentWithdrawText);
    // console.log('current', currentWithdrawAmount);
    let totalWithdrawAmount = currentWithdrawAmount + withdrawAmount;
    document.getElementById('totalWithdrawAmount').innerText = totalWithdrawAmount;

    // clearing deposit input field 
    document.getElementById('withdrawField').value = '';



    // // <-----------------updating total balance----------------->

    const currentBalanceText = document.getElementById('totalBalanceAmount').innerText;
    const currentBalanceAmount = parseFloat(currentBalanceText);
    let totalBalanceAmount = currentBalanceAmount - withdrawAmount;
    document.getElementById('totalBalanceAmount').innerText = totalBalanceAmount;

})