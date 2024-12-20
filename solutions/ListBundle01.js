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

    groupAnagrams = function(strs) {
        let ht = {}
        strs.forEach(s => {
            let ss = s.split("").sort();
            if (ht[ss]!=null){
                let arr = ht[ss];
                arr.push(s)
                ht[ss]=arr;
            } else
                ht[ss]=[s];
        });
        return Object.values(ht);
    }

    replaceElements = function(arr) {
        let ans = [];
        let max1 = -1;
        for (let i=arr.length-1; i>-1; i--) {
            ans.push(max1);
            max1 = Math.max(max1, arr[i]);
        }
        return ans.reverse();
    }

    isSubsequence = function(s, t) {
        let L = s.length;
        if(!L) return true;
        let i = 0;
        let j = 0;
        let located = 0
        while (j < t.length) {
            if (s[i]==t[j]) {
              i++;
              located++;
            }
            j++;
        }
        if(located==L) return true;
        return false;
    };

    lengthOfLastWord = function(s) {
        let ns = s.trim();
        let L = ns.length-1;
        let j = L;
        while (j>-1) {
            if(ns[j]==' ') break;
            j--;
        }
        return L-j;
    }

    longestCommonPrefix_1 = function (strs) {
        let ans = "";
        strs.sort();
        let first = strs[0];
        let last = strs[strs.length-1];
        for(let i=0; i<Math.min(first.length,last.length); i++) {
            if(first.charAt(i)!=last.charAt(i)) break;
            ans+=first.charAt(i);
        }
        return ans;
    }       
    longestCommonPrefix_2 = function (strs) {    
        if(strs==null || strs.length==0) return "";
        let prefix = strs[0];
        strs.forEach(s => {
            while(s.indexOf(prefix)!=0) 
                prefix = prefix.substring(0, prefix.length-1);
        });
        return prefix;        
    }

    topKFrequent = function(nums, k) {
        var res = [];
        const map1 = new Map();
        nums.forEach(e => {
            let located = map1.get(e);
            if(located>-1) 
                map1.set(e, located+1);
            else
                map1.set(e, 1);
        });
        const mapSort1 = new Map([...map1.entries()].sort((a, b) => b[1] - a[1]));
        let i=0
        const mapIterator = mapSort1.keys();
        while (i < k) {
            res.push(mapIterator.next().value);
            i++;
          }        
        return res;
    }

    encode = function(strs) {
        var ans = "";
        strs.forEach(s => {
            const achars = s.split("");
            achars.forEach(c => {
                var i = c.charCodeAt(0) << 2;
                ans += String.fromCharCode(i);
            });
            ans += String.fromCharCode(10);
        });
        return ans;
    }

    decode = function(s) {
        var ans = new Array();
        const a = s.split("");
        var ele = "";
        a.forEach(c => {
            if(c.charCodeAt(0)==10) {
                ans.push(ele);
                ele = "";
            } else {
                var i = c.charCodeAt(0) >> 2;
                ele += String.fromCharCode(i);
            }
        });
        return ans;
    }

    productExceptSelf = function(nums) {
        const ans = new Array(nums.length);
        var left = 1
        for(let i=0; i<nums.length; i++) {
            ans[i] = left;
            left = left * nums[i];
        }
        var right = 1;
        for(let i=nums.length-1; i>-1; i--) {
            ans[i] = right * ans[i];
            right = right * nums[i];
        }
        return ans;
    }
  

}
