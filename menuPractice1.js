import readLineSync from 'readline-sync'
import ListBundle01 from './solutions/ListBundle01.js';

var doSomething = function () {
    const var1 = new ListBundle01();
    var arr = [2,7,11,15];
    console.log("hi, i am doing something [" + var1.twoSum(arr,9) + "]")
}

let userRes;
while (userRes !== '0') {
    console.log("Option 1")
    console.log("Option 2")
    console.log("Option 3")
    userRes = readLineSync.question("Pick an option");
    if (userRes === '1') {
        doSomething()
    } else if (userRes === '2') {
        doSomethingElse()
    }
}