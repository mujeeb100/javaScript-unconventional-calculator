const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input fields
function getUserNumberInput() {
    return parseInt(usrInput.value); 
}

//Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); 
}

function writeToLog(
    operationIdentifier, 
    prevResult,
    operationNumber,
    newResult
){
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number:operationNumber,
        result: newResult
       };
       logEntries.push(logEntry);
       console.log(logEntries);
}

function calculationResult(calculationType) {
    const enteredNumber = getUserNumberInput();
    if (
        calculationType !== 'ADD' && 
        calculationType !== 'SUBTRACT' &&
        calculationType !== 'MULTIPLY' &&
        calculationType !== 'DIVIDE' ||
        !enteredNumber 
    ) {
        return;
    } 


     /*
    if (
        calculationType === 'ADD' ||
        calculationType === 'SUBTRACT' ||
        calculationType === 'MULTIPLY' ||
        calculationType === 'DIVIDE'    
    )
    */  
    
    
    const initialResult = currentResult;
    let mathOperator;
    if (calculationType === 'ADD') {
        currentResult +=  enteredNumber;
         mathOperator = '+'; 
    } else if (calculationType === 'SUBTRACT') {
        currentResult -=  enteredNumber;
        mathOperator = '-';
    }else if (calculationType === 'MULTIPLY'){
        currentResult *=  enteredNumber;
        mathOperator = '*';
    } else if (calculationType === 'DIVIDE') {
        currentResult /=  enteredNumber;
        mathOperator = '/'; 
    }

    
    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}


function add() {   
    calculationResult('ADD');
}

function subtract() {
    calculationResult('SUBTRACT');
}

function multiply(){
    calculationResult('MULTIPLY');
}

function divide() {
    calculationResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);






















//outputResult(currentResult, calculationDescription); 

/*
 //currentResult =  add(1,2);
// add(2,3);
// add(5,8);

//currentResult = (currentResult +  10) * 3 / 2 - 1; 

//  calculationDescription = `(${defaultResult} +  10) * 3 / 2 - 1`;
*/


/*
let currentResult  //allowed varible name
let ageGroup5 //only letters and digits
let $kindOfSpecial //startin with $ is allowed
let _internalValue //Staring with _ is allowed

let user_name // allowed but bas practice
let 21players // starting digist not allowed
let user-b // no Special charcter
let let // keywords are  allowed.
*/





/*
alert ('This works!');
*/