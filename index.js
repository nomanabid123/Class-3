"use strict";
const input = require('prompt-sync')({ sigint: true });
const calculateCredit = (balance, minimumBalance, maxBalance) => {
    let total = balance + minimumBalance + maxBalance;
    let credit = '';
    if (total >= 300)
        credit = 'A+';
    else if (total >= 250)
        credit = 'B';
    else if (total >= 220)
        credit = 'C';
    else if (total >= 180)
        credit = 'D';
    else
        credit = 'Low';
    return credit;
};
const getInput = (message) => {
    let done = false;
    let balance = 0;
    while (!done) {
        balance = parseInt(input(message));
        if (balance <= 100)
            done = true;
        else
            console.log('Invalid input, try again.');
    }
    return balance;
};
let balance = getInput("Enter your balance: ");
let minimumBalance = getInput("Enter your minimum balance: ");
let maxBalance = getInput("Enter your maximum balance: ");
console.log(`Your credit is ${calculateCredit(balance, minimumBalance, maxBalance)}`);
//find all missing values  index in array
const findMissingValues = (arr) => {
    let missingValues = [];
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != index) {
            missingValues.push(index);
            index++;
        }
        index++;
    }
    return missingValues;
};
console.log(findMissingValues([50, 60]));
