const lengthInput = document.querySelector('#length');
const widthInput = document.querySelector('#width');

const isValidNumber = input => input > 0 && !isNaN(input);

const roundToDecimal = (num, place = 2) => {
    const deci = Math.pow(10, place);
    return Math.round((num + Number.EPSILON) * deci) / deci;
};

const calculateArea = obj => {
    const FT2_TO_METER2 = 0.09290304;
    const METER2_TO_FT2 = 10.76391042;
    const { length, width, unit } = obj;
    const area = length * width;

    obj.areaFt = unit === 'feet' ? area : roundToDecimal(area * METER2_TO_FT2, 3);
    obj.areaM = unit === 'meters' ? area : roundToDecimal(area * FT2_TO_METER2, 3);
};

const displayOutput = ({ length, width, unit, areaFt, areaM }) => {
    const message = `You entered dimensions of ${length} by ${width} ${unit}.

The area is

${areaFt} square feet
${areaM} square meters.`;

    return document.querySelector('#output').textContent = message;
};

const handleInput = () => {
    const obj = {
        length: Number(lengthInput.value),
        width: Number(widthInput.value),
        unit: document.querySelector('input[name="unit"]:checked').value,
        areaFt: 0,
        areaM: 0,
    };
    if (!isValidNumber(obj.length) || !isValidNumber(obj.width)) return;

    calculateArea(obj);
    displayOutput(obj);
};

document.addEventListener('input', handleInput);