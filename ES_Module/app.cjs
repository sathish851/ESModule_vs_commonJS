const { add } = require('./function/math');

function addTwoNumber() {
    const sum = add(5, 6);
    console.log('Declared Import:', sum);
}

addTwoNumber()