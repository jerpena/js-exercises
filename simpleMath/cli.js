import * as readline from 'node:readline/promises'
import {stdin as input, stdout as output} from 'node:process'

const rl = readline.createInterface({input, output})

const questions = ['What is your first number? ', 'What is your second number? ']

const isNumber = num => num > 0

const inputError = () => console.log('\nInput must be numeric.\n')

const getInputs = async questions => {
    const inputNums = []
    for (let i = 0; i < questions.length; i++) {
        let num = await rl.question(questions[i])
        num = Number(num)
        if (!isNumber(num)) {
            inputError()
            i--
            continue
        }
        inputNums.push(num)
    }
    rl.close()
    return inputNums
}

const [num1, num2] = await getInputs(questions)

const getSum = (num1, num2) => num1 + num2
const getDifference = (num1, num2) => num1 - num2
const getProduct = (num1, num2) => num1 * num2
const getQuotient = (num1, num2) => num1 / num2

const map = new Map([
    ['+', getSum(num1, num2)],
    ['-', getDifference(num1, num2)],
    ['*', getProduct(num1, num2)],
    ['/', getQuotient(num1, num2)],
])
console.log(map)
const buildCalculationString = (num1, num2, map) => {
    let calcString = '\n'
    for (const [key, value] of map) {
        calcString += `${num1} ${key} ${num2} = ${value}\n`
    }
    return calcString
}

console.log(buildCalculationString(num1, num2, map))