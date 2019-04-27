// this script calculates the cash figures related to the sale of a home

var purchasePrice, downpayment, origMortAmt, currentMortAmt, currentValue, realtorPercentage, realtorCommission, taxRate, startingEquity, currentEquity, saleGainPreTax, saleGainPostTax, estTaxes, improvements, totalCashOut;

document.querySelector('#updateFigures').addEventListener('click', function() {
    //#1 take in user inputs and update variables
    purchasePrice = document.getElementById("purchasePrice").value;
    downpayment = document.getElementById("downpayment").value;
    improvements = document.getElementById("improvements").value;
    currentValue = document.getElementById("currentValue").value;
    currentMortAmt = document.getElementById("currentMortgageAmount").value;
    taxRate = document.getElementById("taxRate").value / 100;
    realtorPercentage = document.getElementById("realtorPercentage").value / 100;
    
    //#2 calculate outputs based on user inputs
    currentEquity = currentValue - currentMortAmt;
    realtorCommission = realtorPercentage * currentValue;
    saleGainPreTax = currentValue - realtorCommission - purchasePrice - Number(improvements);
    estTaxes = taxRate * saleGainPreTax;
    saleGainPostTax = saleGainPreTax - estTaxes;
    totalCashOut = currentValue - currentMortAmt - realtorCommission - estTaxes;
    
    //#3 turn output green if positive gain, red if negative
    var saleGain = document.getElementById("saleGainPostTax");
    if (saleGainPostTax < 0) {
        saleGain.classList.add("cashNegative");
    } else if (saleGainPostTax > 0) {
        saleGain.classList.add("cashPositive");
    }
    
    //#4 format values to US currency
    currentEquity = currentEquity.toLocaleString('us-US', {style: 'currency', currency: 'USD'});
    realtorCommission = realtorCommission.toLocaleString('us-US', {style: 'currency', currency: 'USD'});
    saleGainPreTax = saleGainPreTax.toLocaleString('us-US', {style: 'currency', currency: 'USD'});
    estTaxes = estTaxes.toLocaleString('us-US', {style: 'currency', currency: 'USD'});
    saleGainPostTax = saleGainPostTax.toLocaleString('us-US', {style: 'currency', currency: 'USD'});
    totalCashOut = totalCashOut.toLocaleString('us-US', {style: 'currency', currency: 'USD'});
    
    //#5 update values on html page
    document.querySelector('#currentEquity').textContent = currentEquity;
    document.querySelector('#realtorCommission').textContent = realtorCommission;
    document.querySelector('#saleGainPreTax').textContent = saleGainPreTax;
    document.querySelector('#estTaxes').textContent = estTaxes;
    document.querySelector('#saleGainPostTax').textContent = saleGainPostTax;
    document.querySelector('#totalCashOut').textContent = totalCashOut;
    

});


