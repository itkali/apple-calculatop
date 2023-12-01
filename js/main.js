"use strict"

const display = document.getElementById('display');
const number = document.querySelectorAll('.number');
const operator = document.querySelectorAll('.operator');
const clear = document.getElementById('clear');

let tempInputA = 0;
let tempInputB = 0;
let tempOperator = '';
let statusInput = false;

number.forEach((item) => {
    item.addEventListener('click', (e) => {
    const itemText = e.target.textContent;
    clear.textContent = 'C';
        if (tempInputA !== 0 && tempOperator !== '' && tempInputB == 0){
            display.value = '';
            display.value = itemText;
            tempInputB = itemText;
            console.log(tempInputB);
        } else if(tempInputA !== 0 && tempOperator == '' && tempInputB == 0){
            display.value += itemText;
            tempInputA = display.value;
            console.log(tempInputA);
        } else{
            display.value += itemText;
            tempInputB !== 0 ? tempInputB = display.value : tempInputA = display.value
            console.log(tempInputA);
        }
    });
});

operator.forEach((item) => {
    item.addEventListener('click', (e) => {
    const itemText = e.target.textContent;
    switch (itemText){
        case 'AC':
            tempOperator = '';
            tempInputA = 0;
            tempInputB = 0;
            display.value = '';
            break;
        case 'C':
            display.value = '';
            clear.textContent = 'AC';
            break;
        case '+/-':
            Math.sign(display.value) == '1' &&  display.value !== '' ? display.value = parseFloat('-' + display.value) : display.value = Math.abs(display.value);
            break;
        case 'X':
            if (tempInputA !== 0 && tempInputB !== 0) result(tempInputA, tempInputB, tempOperator)
            tempOperator = '*';
            break;
        case '÷':
            if (tempInputA !== 0 && tempInputB !== 0) result(tempInputA, tempInputB, tempOperator)
            tempOperator = '/';
            break;
        case '-':
            if (tempInputA !== 0 && tempInputB !== 0) result(tempInputA, tempInputB, tempOperator)
            tempOperator = '-';
            break;
        case '+':
            if (tempInputA !== 0 && tempInputB !== 0) result(tempInputA, tempInputB, tempOperator)
            tempOperator = '+';
            break;
        case ',':
            if (display.value !== '' && display.value.indexOf(".") == '-1') display.value += '.';
            break;
        case '%':
            display.value = eval(display.value + '/100')
            if (tempInputA !== 0 && tempInputB !== 0){
                result(tempInputA, tempInputB, tempOperator);
                tempOperator = '%';
            }
            break;
        case '=':
            result(tempInputA, tempInputB, tempOperator)
            break;
    default:

    };
    });
});


function result(numberA, numberB, operators){
    console.log(numberA, numberB, operators);
    if (display.value !== '' && operators !== ''){
        try {
            if(operators == '%'){
                display.value = eval(((numberA) + (operators = '*') + (numberB)) / 100);
            }
            if(numberB == 0){
                display.value = eval((numberA) + (operators) + (display.value));
            }
            else{
                display.value = eval((numberA) + (operators) + (numberB));
            }
            tempInputA = display.value;
            tempInputB = 0;
        } catch (e) {
            display.value = 'error';
        }
    }
}
// btn.forEach((item) => {
//     item.addEventListener('click', (e) => {
//         const itemText = e.target.textContent;
//         switch (itemText){
//             case 'AC':
//                 display.value = '';
//                 operator = '';
//                 tempInput = '';
//                 break;
//             case 'C':
//                 display.value = '';
//                 clear.innerText = 'AC'
//                 break;
//             case '+/-':
//                 Math.sign(display.value) == '1' &&  display.value !== '' ? display.value = parseFloat('-' + display.value) : display.value = Math.abs(display.value);
//                 break;
//             case 'X':
//                 itemText.textContent = '*';
//                 fn(itemText)
//                 break;
//             case '÷':
//                 fn(itemText)
//                 break;
//             case '-':
//                 fn(itemText)
//                 break;
//             case ',':
//                 if (display.value !== '' && display.value.indexOf(".") == '-1') display.value += '.';
//                 break;
//             case '+':
//                 fn(itemText)

//                 if (tempInput !== ''){
//                     try {
//                         result = eval((tempInput) + (operator) + (display.value));
//                         display.value = result;
//                     } catch (e) {
//                         display.value = 'error';
//                     }
//                 } else fn(itemText)
                
//                 break;
//             case '%':
//                 display.value = eval(display.value + '/100');
//                 break;
//             case '=':




//             if (display.value !== ''){
//                     try {
//                         result = eval((tempInput) + (operator) + (display.value));
//                         display.value = result;
//                     } catch (e) {
//                         display.value = 'error';
//                     }
//                     break;
//                 }
//                 break;
//         default:
//             if(display.value == '' && itemText !== "," && result !== ''){
//                 display.value = itemText;
//             } else display.value += itemText;
//         };
//     });
// });

// function fn(temp){
//     operator = temp;
//     tempInput = display.value;
//     display.value = '';
// }







    // 
    //     
    //     input.value = itemText;
    //     switch (itemText) {
    //         case '+/-':
    //             console.log(Math.sign(input.value))

    //             // Math.sign(input.value) == '1' &&  input.value == '' ? input.value = parseFloat('-' + input.value) : input.value = Math.abs(input.value);
    //             // break;
    //         case 'X':
    //             tempOperator = "*";
    //             break;
    //         case '÷':
    //             tempOperator = "/";
    //             break;
    //         case '%':
    //             tempOperator = "%";
    //             break;
    //         case '-':
    //             tempOperator = "-";
    //             break;
    //         case '+':
    //             tempOperator = "+";
    //             tempInputB = tempInputA;
    //             break;
    //     };
    // });

