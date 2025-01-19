// ES Import using import()
// require() is asynchronous
import { add } from './function/math.js';

// Top-Level await works.
const {add} = await import('./function/math.js');

function addTwoNumber () {
    const sum = add(5,6);
    console.log("Declared Import:",sum);
}

async function importFunctionDynamicallyAndAddTwoNumber () {
    // import() is asynchronous. so, it made easy to achive dynamic import.
    const { add } =  await import('./function/math.js');
    const sum = add(5,6);
    console.log('Dynamic Import:',sum);
}
-
addTwoNumber()
importFunctionDynamicallyAndAddTwoNumber()