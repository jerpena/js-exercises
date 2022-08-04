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

const showError = target => {
    target.classList.add('error')
}

const resetError = target => {
    target.classList.remove('error')
}

const isValidNumber = value => {
    return value > 0
}

const handleInput = ({target}) => {
    rangeOutput.textContent = range.value;
    const {billInput, tipInput} = form
    const billAmount = Number(billInput.value)
    const tipRate = Number(tipInput.value)
    let tip = 0;
    let totalBill = 0;

    if (!isValidNumber(billAmount)) {
        tipOutput.textContent = "$0.00"
        totalBillOutput.textContent = "$0.00"
        return showError(billInput)
    } else {
        resetError(billInput)
    }

    tip = calculateTip(billAmount, tipRate)
    totalBill = calculateTotal(billAmount, tip)

    tipOutput.textContent = currency.format(tip);
    totalBillOutput.textContent = currency.format(totalBill)
}

form.addEventListener('input', handleInput)
