const input = require('prompt-sync')({sigint: true});

/* Code Writen By Noman Abid (Software Engineer)*/
const calculateCredit = (balance:number, minimumBalance:number, maxBalance:number) => {

    let total:number = balance + minimumBalance + maxBalance;
    let credit:string= '';

    if(total >= 300)
        credit = 'A+';
    else if(total >= 250)
        credit = 'B';
    else if(total >= 220)
        credit = 'C';
    else if(total >= 180)
        credit = 'D';
    else
        credit = 'Low';

        return credit;
}


const getInput = (message:string) => {
    let done:boolean = false;
    let balance:number = 0;
    while(!done){
         balance = parseInt(input(message));
        if(balance <=100)
            done = true;
        else
            console.log('Invalid input, try again.');
    }
    return balance;

}


// let balance:number = getInput("Enter your balance: ");
// let minimumBalance:number = getInput("Enter your minimum balance: ");
// let maxBalance:number = getInput("Enter your maximum balance: ");

// console.log(`Your credit is ${calculateCredit(balance, minimumBalance, maxBalance)}`);



const findIndexs = (arr:number[]) => {
     
    let indexs:number[] = [];
    let newArray = []
    for(let i=arr[0]; i<arr[arr.length-1]; i++){
       newArray.push(i);
    }
    for(let i=0; i<newArray.length; i++){
        if(!arr.includes(newArray[i]))
            indexs.push(i);
    }
    return indexs;
}

console.log(findIndexs([45,56,78,90]));