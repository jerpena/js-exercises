const input = document.getElementById('textInput')
const stringOutput = document.getElementById('stringOutput')
const countOutput = document.getElementById('countOutput')


input.addEventListener('input', () => {
    const string = input.value
    const count = string.length
    stringOutput.textContent = `"${string}"`;
    countOutput.textContent = count;
})