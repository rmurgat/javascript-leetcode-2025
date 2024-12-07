export default class ListBundle01 {

    constructor() {
    }

    holamundo = function () {
        return "hola mundo";
    }

    twoSum = function (nums, target) {
        // Create an object to store numbers and their corresponding indices
        let numToIndexMap = {};

        // Loop through the array
        for (let i = 0; i < nums.length; i++) {
            // Calculate the difference between the target and the current number
            let diff = target - nums[i];

            // Check if the difference already exists in the object
            if (numToIndexMap.hasOwnProperty(diff)) {
                // If it exists, return the indices of the current number and the number that adds up to the target
                return [i, numToIndexMap[diff]];
            }

            // If it doesn't exist, add the current number and its index to the object
            numToIndexMap[nums[i]] = i;
        }

        // If no two numbers add up to the target, return null
        return null;
    };

    containsDuplicate_1 = function(nums) {
        let set1 = new Set(nums);
        return set1.size !== nums.length;
    };

    containsDuplicate_2 = function(nums) {
        let memo = [];
        let L = nums.length;
        for(let i=0; i<L; i++) {
            if(memo.indexOf(nums[i])>-1) 
                return true;
            memo.push(nums[i]);
        }
        return false;
    };

    containsDuplicate_3 = function(nums) {
        nums.sort();
        for (let i=1; i<nums.length; i++) 
            if(nums[i]===nums[i-1]) 
                return true;
        return false;
    }

    isAnagram = function(s, t) {
        let memo = {}
        for(let i=0; i<s.length; i++) {
            if(memo.hasOwnProperty(s[i])) 
                memo[s[i]]++;
            else
                memo[s[i]] = 1;
        }
        for(let i=0; i<t.length; i++) {
            if(memo.hasOwnProperty(t[i])) 
                memo[t[i]]--;
            else
            memo[t[i]] = 1
        }
        for(let key in Object.getOwnPropertyDescriptors(memo)) {
            if(memo[key]!=0) return false;
        }
        return true;
    }

}
