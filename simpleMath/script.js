const numInput1 = document.getElementById('firstNum')
const numInput2 = document.getElementById('secondNum')
const output = document.getElementById('output')

const getSum = (num1, num2) => num1 + num2
const getDifference = (num1, num2) => num1 - num2
const getProduct = (num1, num2) => num1 * num2
const getQuotient = (num1, num2) => num1 / num2

const validateInput = input => input > 0

const buildOutput = (num1, num2) => {
    let output = '\n'
    const map = new Map([
        ['+', getSum(num1, num2)],
        ['-', getDifference(num1, num2)],
        ['*', getProduct(num1, num2)],
        ['/', getQuotient(num1, num2)]
    ])

    for (const [operator, value] of map) {
        output += `${num1} ${operator} ${num2} = ${value}\n\n`
    }
    return output
}

const handleInput = () => { 
    const num1 = Number(numInput1.value)
    const num2 = Number(numInput2.value)

    if (validateInput(num1) && validateInput(num2)) {
        return output.textContent = buildOutput(num1, num2)
    }
    output.textContent = ''
}

document.addEventListener('input', handleInput)