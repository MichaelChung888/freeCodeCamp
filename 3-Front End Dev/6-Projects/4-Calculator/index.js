const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator-keys");
const display = document.querySelector(".calculator-display");

let calc = "";
let prevAction = "";
let numbers = [];
let operations = [];
let isDecimal = false;

function calculate(valArr, operArr){
    let testValArr = valArr.slice();
    let testOperArr = operArr.slice()

    while(testOperArr.includes("÷")){
        let i = testOperArr.indexOf("÷");
        testValArr.splice(i, 2, String(parseFloat(testValArr[i]) / parseFloat(testValArr[i+1])));
        testOperArr.splice(i, 1);
    }
    while(testOperArr.includes("×")){
        let i = testOperArr.indexOf("×");
        testValArr.splice(i, 2, String(parseFloat(testValArr[i]) * parseFloat(testValArr[i+1])));
        testOperArr.splice(i, 1);
    }
    while(testOperArr.includes("−")){
        let i = testOperArr.indexOf("−");
        testValArr.splice(i, 2, String(parseFloat(testValArr[i]) - parseFloat(testValArr[i+1])));
        testOperArr.splice(i, 1);
    }
    while(testOperArr.includes("+")){
        let i = testOperArr.indexOf("+");
        testValArr.splice(i, 2, String(parseFloat(testValArr[i]) + parseFloat(testValArr[i+1])));
        testOperArr.splice(i, 1);
    }
    return testValArr[0];
}

function update(displayText, keyVal, action) {
    if(keyVal == "="){
        if(calc != ""){ }
        else {
            numbers = displayText.match(/\-?\d+\.?\d*/g);
            operations = displayText.match(/[+−÷×]/g);
    
            if(numbers == null || operations.length >= numbers.length){
                display.textContent = "undefined";
            }
            else {
                calc = calculate(numbers, operations);
                display.textContent += keyVal + calc;
            }
        }
    }
    else if(keyVal == "AC"){
        display.textContent = "0";
        isDecimal = false;
    }
    else {
        if((displayText == "0" && !action && !(keyVal == ".")) || (displayText == "undefined" && keyVal != "−") || (calc != "" && !action)){ 
            display.textContent = keyVal;
            calc = "";
        }
        else if (calc != "" && action){ //Action key after calculation
            display.textContent = calc + keyVal;
            calc = "";
        }
        else if (keyVal == "−" && prevAction){ //e.g 7+-5
            display.textContent += "-";    
        }
        else if (keyVal == "−" && (displayText == "0" || displayText == "undefined")){ //e.g -7+5
            display.textContent = "-";
        }
        else if(keyVal == "." && (isDecimal || displayText == "0")){ } //No decimal if number already a decimal or display "0"
        else if(action && displayText == "0"){  } //No action if display "0"
        else {
            display.textContent += keyVal;
            if(keyVal == "."){
                isDecimal = true;
            }
            else if(action){
                isDecimal = false;
            }
        }
    }
    prevKey = keyVal;
    prevAction = action;
}

keys.addEventListener("click", e => {
    if(e.target.matches("button")){
        update(displayText=display.textContent, keyVal=e.target.value, action=e.target.dataset.action);
    }
});

document.addEventListener("keydown", e => {
    const validChar = (/\d|\+|\-|\/|\*|\=|\./).test(e.key);
    const validAction = (/\+|\-|\/|\*/).test(e.key);

    if(validAction){
        if(e.key == "-"){
            update(displayText=display.textContent, keyVal="−", action="true");
        }
        else if (e.key == "*"){
            update(displayText=display.textContent, keyVal="×", action="true");
        }
        else if (e.key == "/"){
            update(displayText=display.textContent, keyVal="÷", action="true");
        }
        else {
            update(displayText=display.textContent, keyVal=e.key, action="true");
        }
    }
    else if (validChar) {
        update(displayText=display.textContent, keyVal=e.key, action="");
    }
    
});