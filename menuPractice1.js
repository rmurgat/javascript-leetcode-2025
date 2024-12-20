import readLineSync from 'readline-sync'
import ListBundle01 from './solutions/ListBundle01.js';

var doprintingSumTwo = function () {
    const lib = new ListBundle01();
    var arr = [2,7,11,15];
    console.log("[Sum Two]");
    console.log("Answer No. 1 [" + lib.twoSum(arr,9) + "]")
}

var doprintingContainsDuplicate = function() {
    const lib = new ListBundle01();
    var arr = [2,7,11,15,11];
    console.log("[ Contains Duplicate ]");
    console.log("Answer No. 1: " + lib.containsDuplicate_1(arr))
    console.log("Answer No. 2: " + lib.containsDuplicate_2(arr))
    console.log("Answer No. 2: " + lib.containsDuplicate_3(arr))    
}

var doprintingValidAnagram = function() {
    const lib = new ListBundle01();
    console.log("[ Valid Anagram ]");
    console.log("Answer No. 1: " + lib.isAnagram("anagram", "nagaram"));
}
var doprintingGroupAnagram = function() {
    const lib = new ListBundle01();
    console.log("[ Group Anagram ]");
    console.log("Answer No.1: " + lib.groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
}
var doprintingReplaceElements = function() {
    const lib1 = new ListBundle01();
    console.log("[ Replace Elements ]");
    console.log("Answer No.1: " + lib1.replaceElements([17,18,5,4,6,1]))
}
var doprintingIsSubsequence = function() {
    const lib1 = new ListBundle01();
    console.log("[ Is Subsquence  ]");
    console.log("Answer No. 1:" + lib1.isSubsequence("abc", "ahbgdc"));
}
var doprintingLengthLastWord = function() {
    const lib1 = new ListBundle01();
    console.log("[ Length Last word  ]");
    console.log("Answer No. 1: " + lib1.lengthOfLastWord("   fly me   to   the moon  "));
    console.log("Answer No. 2: " + lib1.lengthOfLastWord("Hello World"));
    console.log("Answer No. 3: " + lib1.lengthOfLastWord("luffy is still joyboy"));
    console.log("Answer No. 4: " + lib1.lengthOfLastWord("luffy"));
    console.log("Answer No. 5: " + lib1.lengthOfLastWord(""));    
}
var doprintingLongestCommonPrefix = function() {
    const lib1 = new ListBundle01();
    console.log("[ LongestCommonPrefix  ]");
    console.log ("Answer No. 1, type=1: " + lib1.longestCommonPrefix_1(["flower","flow","flight"]) );
    console.log ("Answer No. 2, type=1: " + lib1.longestCommonPrefix_1(["dog","racecar","car"]) );
    console.log ("Answer No. 3, type=1: " + lib1.longestCommonPrefix_1(["car"]) );
    console.log ("Answer No. 4, type=1: " + lib1.longestCommonPrefix_1([""]) );
    console.log ("Answer No. 1, type=2: " + lib1.longestCommonPrefix_2(["flower","flow","flight"]));
    console.log ("Answer No. 2, type=2: " + lib1.longestCommonPrefix_2(["dog","racecar","car"]));
    console.log ("Answer No. 3, type=2: " + lib1.longestCommonPrefix_2(["car"]));
    console.log ("Answer No. 4, type=2: " + lib1.longestCommonPrefix_2([""]));
}
var doprintingTopKFrequentElement = function() {
    const lib1 = new ListBundle01();
    console.log("[ Top K Frequent Element ]");
    console.log ("Answer No. 1, type=1: " + lib1.topKFrequent([1,1,1,2,2,3],2) );
    console.log ("Answer No. 1, type=1: " + lib1.topKFrequent([1],1) );
}
var doprintingEncodeDecodeString = function() {
    const lib1 = new ListBundle01();
    const array1 = ['neet','code','love','you'];
    console.log(" [ Enconde / Decode String Array] ");
    var encoded = lib1.encode(array1);
    console.log("Encode Answer no. 1:" + encoded);
    console.log("Decoded Answer no. 1:");
    const ans = lib1.decode(encoded);
    ans.forEach(s=> {
        console.log(s);
    })
}
var doprintingArrayExceptSelf = function() {
    const lib1 = new ListBundle01();
    const array1 = [1,2,3,4];
    console.log(" [ Product Array Except Self ] ");
    const array2 = lib1.productExceptSelf(array1);
    array2.forEach(i=> {
        console.log(i)
    })
}

let userRes;
while (userRes !== '0') {
    console.log("[LEETCODE PROBLEMS]")
    console.log("1. Two Sum (LC#1)")
    console.log("2. Contains Duplicate (LC#217)")
    console.log("3. Valid Anagram (LC#242)")
    console.log("4. Group Anagram (LC#49)")
    console.log("5. Replace Elements (LC#1299)")
    console.log("6. Is Subsequence (LC#392)")
    console.log("7. Length of Last Word (LC#58)")
    console.log("8. Longest Common Prefix (LC#14)")
    console.log("9. Top K Frequent Element (LC#347)")
    console.log("10. Encode and Decode String (neetcode)");
    console.log("11. Product of Array Except Self (LC#238)");
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
        case '4':
            doprintingGroupAnagram();
            break;
        case '5':
            doprintingReplaceElements();
            break;
        case '6':
            doprintingIsSubsequence();
            break;
        case '7':
            doprintingLengthLastWord();
            break;
        case '8':
            doprintingLongestCommonPrefix();
            break;
        case '9':
            doprintingTopKFrequentElement();
            break;
        case '10':
            doprintingEncodeDecodeString();
            break;
        case '11':
            doprintingArrayExceptSelf();
            break;
    }
}