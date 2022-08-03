const form = document.querySelector('.form')
const range = document.getElementById("tip");
const rangeOutput = document.getElementById("rangeValue");
rangeOutput.textContent = range.value;

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

form.addEventListener("submit", event => {
    event.preventDefault();
    const tipAmount = document.getElementById('tipAmount')
    const totalBillOutput = document.getElementById('totalAmount')
    const {bill: billInput, tip: tipInput} = event.currentTarget
    let tip = 0;
    let totalBill = 0;
    const billAmount = Number(billInput.value)
    const tipRate = Number(tipInput.value)
    tip = (billAmount * (tipRate / 100)).toFixed(2)
    totalBill = billAmount + Number(tip);
    tipAmount.textContent = formatter.format(tip);
    totalBillOutput.textContent = formatter.format(totalBill)
});

range.addEventListener('change', event => {
    rangeOutput.textContent = range.value;
})