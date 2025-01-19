// CommonJS Import using require()
// require() is synchronous


const { add } = require('./function/math');

// No Top Level await


function addTwoNumber() {
    const sum = add(5, 6);
    console.log('Declared Import:', sum);
}

async function importFunctionDynamicallyAndAddTwoNumber() {
    // Use require within a promise to mimic dynamic import() cause the require natively
    const { add } = await new Promise((resolve, reject) => {
        try {
            resolve(require('./function/math.js'));
        } catch (error) {
            reject(error);
        }
    });
    const sum = add(5, 6);
    console.log('Dynamic Import:', sum);
}


addTwoNumber()
importFunctionDynamicallyAndAddTwoNumber();
