const form = document.querySelector('.form')

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const tipOutput = document.getElementById('tipAmount')
    const totalBillOutput = document.getElementById('totalAmount')
    const {bill: billInput, tip: tipInput} = event.currentTarget
    let tip = 0;
    let totalBill = 0;
    const billAmount = Number(billInput.value)
    const tipRate = Number(tipInput.value)
    tip = (billAmount * (tipRate / 100)).toFixed(2)
    totalBill = billAmount + Number(tip);
    tipOutput.textContent = tip;
    totalBillOutput.textContent = totalBill
});