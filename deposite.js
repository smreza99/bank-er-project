document.getElementById('deposit-btn').addEventListener('click', function(){
    const dipositeField = document.getElementById('input-field');
    const NewDipositAmountString = dipositeField.value;
    const newDipositAmount = parseFloat(NewDipositAmountString);

    console.log(typeof newDipositAmount);
    const dipositElements = document.getElementById('diposit-total');
    const previousdiposittotalString = dipositElements.innerText;
    const previoustotalDiposit = parseFloat(previousdiposittotalString);

    console.log(typeof previoustotalDiposit);

    const currentDepositTotal = previoustotalDiposit + newDipositAmount;
    
    dipositElements.innerText=currentDepositTotal;

    const balanceTotalElements = document.getElementById('balance-total');
    const previousTotalBalanceString = balanceTotalElements.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceString);

    const currentBalanceTotal = previousTotalBalance + newDipositAmount;
    balanceTotalElements.innerText = currentBalanceTotal;
}) 