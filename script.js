//Buttons
const field = document.querySelector('.value_field');
const clean = document.querySelector('.clean');
const unary_minus = document.querySelector('.unary_minus');
const percent = document.querySelector('.percent');
const divide = document.querySelector('.divide');
const multiply = document.querySelector('.multiply');
const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
const equel = document.querySelector('.equel');

//Operands
const dot = document.querySelector('.dot');
const num0 = document.querySelector('.num-0');
const num1 = document.querySelector('.num-1');
const num2 = document.querySelector('.num-2');
const num3 = document.querySelector('.num-3');
const num4 = document.querySelector('.num-4');
const num5 = document.querySelector('.num-5');
const num6 = document.querySelector('.num-6');
const num7 = document.querySelector('.num-7');
const num8 = document.querySelector('.num-8');
const num9 = document.querySelector('.num-9');

const numbers = [num0, num1, num2, num3, num4, num5, num6, num7, num8, num9];

let currOperator = null;
let numClicked = true;
let currResult = null;
let operatorClicked = null;
let percentClicked=true

numbers.forEach(elem => elem.addEventListener('click', function () {
    if(numClicked){
        let currNum = +elem.innerHTML;
        operatorClicked = true;
        if(field.innerHTML === '0' || field.innerHTML == currResult) field.innerHTML = currNum;
        else if(field.innerHTML.length < 9) field.innerHTML += currNum;
    }
}))

dot.addEventListener('click', ()=>{
    let currNum = field.innerHTML;
    if(field.innerHTML.length < 8){
        if(!currNum.includes('.'))
        field.innerHTML = currNum + '.';
    }
})

clean.addEventListener('click', ()=>{
    field.innerHTML = '0';
    currResult = null;
    numClicked = true;
})

divide.addEventListener('click', ()=> {
    console.log('!!!!')

    if(operatorClicked){
        operatorClick('divide');
    } 
    operatorClicked = false;
    numClicked = true;
})

multiply.addEventListener("click",()=>{
    if(operatorClicked){
        operatorClick("multiply")
    }
        operatorClicked=false
        numClicked=true
    
})
minus.addEventListener("click",()=>{
    if(operatorClicked){
        operatorClick('minus') 
    }
    operatorClicked=false
    numClicked=true
})

plus.addEventListener("click",()=>{
    if(operatorClicked){
        operatorClick("plus")
    }
    operatorClicked=false
    numClicked=true
})

unary_minus.addEventListener("click",()=>{
    if(operatorClicked){
        operatorClick("unary_minus")
    }
    operatorClicked=false
    numClicked=true
})  


equel.addEventListener('click', ()=>{
    operatorClicked = true;
    numClicked = false;
    if(currResult){
        field.innerHTML = getResult();
        currResult = null;
        currOperator = null;
    }
})

percent.addEventListener("click",()=>{
    if(percentClicked&&operatorClicked){
        operatorClick("percent")
    }
    operatorClicked=false
    percentClicked=false
    numClicked=true
})
function operatorClick(operator) {
    if(operatorClicked){
        let currNum = parseFloat(field.innerHTML);
        if(!currResult){
            currResult = currNum;
            currOperator = operator;
            
            return;
        }
        console.log(currResult, currOperator);
        currResult = getResult();
        currOperator = operator;
        field.innerHTML = currResult;
    }
}

function getResult() {
    let currNum = parseFloat(field.innerHTML);
    let newCurrNum;
    let currResultNum = parseFloat(currResult);

    switch(currOperator){
        case 'divide':
            newCurrNum = currResultNum / currNum;
            break;
        case "multiply":
            newCurrNum=currResultNum*currNum;
            break;
        case "minus":
            newCurrNum=currResult-currNum;
            break;
        case "plus":
            newCurrNum=currResult+currNum;
            break;
        case "unary_minus":
            newCurrNum=-currResultNum
            break;
        case "percent":
            newCurrNum=(currResultNum*currNum)/100;
            break;
    }
    if(newCurrNum==null||newCurrNum==undefined||isNaN(newCurrNum)||!isFinite(newCurrNum))newCurrNum="Eror";
    newCurrNum=newCurrNum.toFixed(2)
    return newCurrNum;

}
