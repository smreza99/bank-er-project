document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newwithdrawAmountString = withdrawField.value;
    const newwithdrawAmount = parseFloat(newwithdrawAmountString);

    //
    console.log(newwithdrawAmount);
   
        if (isNaN(newwithdrawAmount)) {
          alert('please provide a valid number');
          return;
        }
       
      

    const widthdrawElements = document.getElementById('total-widthdraw');
    const previouswithdraw = widthdrawElements.innerText;
    const previouswithdrawTotal = parseFloat(previouswithdraw);

    const currentwidthdrawTotal =  previouswithdrawTotal + newwithdrawAmount;

    widthdrawElements.innerText = currentwidthdrawTotal;
//

if(newwithdrawAmount > previousBalanceTotal){
    alert('baper bank e ato taka nai');
    return;
}

//
const balanceTotalElements = document.getElementById('balance-total');
const previousBalanceTotalString =  balanceTotalElements.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);
console.log(previousBalanceTotal);

const newBalanceTotal = previousBalanceTotal - newwithdrawAmount;
balanceTotalElements.innerText = newBalanceTotal;

    //
   widthdrawElements.value = '';
 })