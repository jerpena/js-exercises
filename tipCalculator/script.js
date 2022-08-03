const form = document.querySelector('.form')
const range = document.getElementById("tipInput");
const rangeOutput = document.getElementById("rangeValue");
const tipOutput = document.getElementById('tipAmount')
const totalBillOutput = document.getElementById('totalAmount')

rangeOutput.textContent = range.value;

const currency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

const calculateTip = (billAmount, tipRate) => {
    return parseFloat((billAmount * (tipRate / 100)).toFixed(2))
}

const calculateTotal = (billAmount, tip) => billAmount + tip

const handleForm = event => {
    event.preventDefault();
    const {billInput, tipInput} = form
    const billAmount = Number(billInput.value)
    const tipRate = Number(tipInput.value)
    let tip = 0;
    let totalBill = 0;

    tip = calculateTip(billAmount, tipRate)
    totalBill = calculateTotal(billAmount, tip)

    tipOutput.textContent = currency.format(tip);
    totalBillOutput.textContent = currency.format(totalBill)
}

const isValidNumber = value => {
    return Math.sign(value)
}

const handleInput = event => {
    rangeOutput.textContent = range.value;
    
}

form.addEventListener("submit", handleForm);

form.addEventListener('input', handleInput)
