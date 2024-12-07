import readLineSync from 'readline-sync'
import ListBundle01 from './solutions/ListBundle01.js';

var doprintingSumTwo = function () {
    const var1 = new ListBundle01();
    var arr = [2,7,11,15];
    console.log("[Sum Two]");
    console.log("Answer No. 1 [" + var1.twoSum(arr,9) + "]")
}

var doprintingContainsDuplicate = function() {
    const var1 = new ListBundle01();
    var arr = [2,7,11,15,11];
    console.log("[ Contains Duplicate ]");
    console.log("Answer No. 1: " + var1.containsDuplicate_1(arr))
    console.log("Answer No. 2: " + var1.containsDuplicate_2(arr))
    console.log("Answer No. 2: " + var1.containsDuplicate_3(arr))    
}

var doprintingValidAnagram = function() {
    const var1 = new ListBundle01();
    console.log("[ Valid Anagram ]");
    console.log("Answer No. 1: " + var1.isAnagram("anagram", "nagaram"));
}

let userRes;
while (userRes !== '0') {
    console.log("[LEETCODE PROBLEMS]")
    console.log("1. Two Sum (LC#1)")
    console.log("2. Contains Duplicate (LC#217)")
    console.log("3. Valid Anagram (LC#242)")
    userRes = readLineSync.question("[pick an option:] ");
    switch(userRes) {
        case '1':
            doprintingSumTwo();
            break;
        case '2':
            doprintingContainsDuplicate();
            break;
        case '3':
            doprintingValidAnagram();
            break;

    }
/*    if (userRes === '1') {
        doprintingSumTwo()
    } else if (userRes === '2') {
        doprintingContainsDuplicate()
    } */
}