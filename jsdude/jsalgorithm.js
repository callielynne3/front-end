// JS Algorithms

// Verify a prime number? O(n)
function isPrime(n){
  var divisor = 2;
  while (n > divisor){
    if(n % divisor == 0){
     return false; 
    }
    else {
      divisor++;
    }
  }
  return true;
}
// Find all prime factors of a number? O(n)
function primeFactors(n){
  var factors = [], 
      divisor = 2;
  while(n>2){
    if(n % divisor == 0){
       factors.push(divisor); 
       n= n/ divisor;
    }
    else{
      divisor++;
    }     
  }
  return factors;
}

// Get nth Fibonacci number? 0(n)
function fibonacci(n){
  if(n<=1)
    return n;
  else
    return fibonacci(n-1) + fibonacci (n-2);  
}
// Find the greatest common divisor of two numbers?
function greatestCommonDivisor(a, b){
  var divisor = 2, 
      greatestDivisor = 1;
  if (a < 2 || b < 2)
     return 1;
  while(a >= divisor && b >= divisor){
   if(a % divisor == 0 && b % divisor ==0){
      greatestDivisor = divisor;      
    }
   divisor++;
  }
  return greatestDivisor;
}

// Remove duplicate members from an array?
function removeDuplicate(arr){
  var exists ={},
      outArr = [], 
      elm;
  for(var i =0; i<arr.length; i++){
    elm = arr[i];
    if(!exists[elm]){
      outArr.push(elm);
      exists[elm] = true;
   }
  }
  return outArr;
}

// Merge two sorted array?
function mergeArray(arr1, arr2){
  var arr = arr1.push(arr2);
  bubbleSort(arr);
}

function bubbleSort(arr){
    var len = arr.length;
    for(var i = len-1; i>=0; i--){
      for(var j = 1; j<=i; j++){
        if(arr[j-1]>arr[j]){
          var temp = arr[j-1];
          arr[j-1] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return arr;
  }

// Swap two numbers without using a temp variable?
function swapNumb(a, b){
  b = b -a;
  a = a+ b;
  b = a-b; 
}

// Reverse a string in JavaScript?
function reverse(str){
  var newStr = '';
  for(var i = str.length-1; i>=0;i--){
    newStr += str[i];
  }
  return newStr;
}

// Reverse words in a sentence?
function reverseWords(str){
  return str.split(' ').reverse();
} 

OR 

function reverseWords(str){
 var rev = [], 
     wordLen = 0;
 for(var i = str.length-1; i>=0; i--){
   if(str[i]==' ' || i==0){
     rev.push(str.substr(i,wordLen+1));
     wordLen = 0;
   }
   else
     wordLen++;
 }
 return rev.join(' ');
}

// Reverse words in place?
function reverseInPlace(str){
  return str.split(' ').reverse().join(' ').split('').reverse().join('');
}

// Find the first non repeating char in a string?
function firstNonRepeatChar(str){
  var len = str.length,
      char, 
      charCount = {};
  for(var i =0; i<len; i++){
    char = str[i];
    if(charCount[char]){
      charCount[char]++;
    }
    else
      charCount[char] = 1;
  }
  for (var j in charCount){
    if (charCount[j]==1)
       return j;
  }
}  

// Remove duplicate characters from a sting?
function removeDuplicateChar(str){
  var len = str.length,
      char, 
      charCount = {}, 
      newStr = [];
  for(var i =0; i<len; i++){
    char = str[i];
    if(charCount[char]){
      charCount[char]++;
    }
    else
      charCount[char] = 1;
  }
  for (var j in charCount){
    if (charCount[j]==1)
       newStr.push(j);
  }
  return newStr.join('');
}

// Verify a word as palindrome?
function isPalindrome(str){
  var i, len = str.length;
  for(i =0; i<len/2; i++){
    if (str[i]!== str[len -1 -i])
       return false;
  }
  return true;
}

// Generate random between 5 to 7 by using defined function.
function rand5(){
   return 1 + Math.random() * 4;
}

function rand7(){
  return 5 + rand5() / 5 * 2;
}

// Find missing number from unsorted array of integers.
function missingNumber(arr){
  var n = arr.length+1, 
  sum = 0,
  expectedSum = n* (n+1)/2;
  
  for(var i = 0, len = arr.length; i < len; i++){
    sum += arr[i];
  }
  
  return expectedSum - sum;
}

// Check whether any two numbers in an array sums to a given number?
function sumFinder(arr, sum){
  var len = arr.length;
  for(var i =0; i<len-1; i++){  
     for(var j = i+1;j<len; j++){
        if (arr[i] + arr[j] == sum)
            return true;
     }
  }
  return false;
}

// Find the largest sum of any two elements?
function topSum(arr){
  
  var biggest = arr[0], 
      second = arr[1], 
      len = arr.length, 
      i = 2;
  if (len<2) return null;
  if (biggest<second){
    biggest = arr[1];
    second = arr[0];
  } 
  for(; i<len; i++){
   if(arr[i] > biggest){
      second = biggest;
      biggest = arr[i];
    }
   else if (arr[i]>second){
      second = arr[i];
   }
 }
 return biggest + second;
}

// Total number of zeros from 1 upto n?
function countZero(n){
  var count = 0;
  while(n>0){
   count += Math.floor(n/10);
   n = n/10;
  }
  return count;
}

// Match substring of a sting?
function subStringFinder(str, subStr){
  var idx = 0,
      i = 0,
      j = 0,
      len = str.length,
      subLen = subStr.length;
   for(; i<len; i++){
      if(str[i] == subStr[j])
         j++;
      else
         j = 0; 
      if(j == 0)
        idx = i;
      else if (j == subLen)
        return idx;
  }
  return -1;
}

// Create all permutation of a string?
function permutations(str){
var arr = str.split(''),
    len = arr.length, 
    perms = [],
    rest,
    picked,
    restPerms,
    next;
    if (len == 0)
        return [str];
    for (var i=0; i<len; i++)
    {
        rest = Object.create(arr);
        picked = rest.splice(i, 1);
        restPerms = permutations(rest.join(''));
       for (var j=0, jLen = restPerms.length; j< jLen; j++)
       {
           next = picked.concat(restPerms[j]);
           perms.push(next.join(''));
       }
    }
   return perms;
}



// similar question
// display prime numbers up to n.
// Display number which is repeated for event times in an array
// Fist non repeating character not case sensitive programming praxis
// count words in a string
// In an integer array, there is 1 to 100 number, out of one is duplicate, how to find ?
// implement substring of a string. also make it case sensitive
// Find a square of a number. but you can only use addition or subtraction but no multiplication or division Odd way to Square
// medium level
// From two sorted array how would you find common number?
// From web page, how would u find similar words like rat, cat, bat and broom, groom etc.
// get first 100 character long string from a big message but dont cut the last word (word break problem)
// Find the max difference of elements from two sorted array with non duplicate integer elements
// Second symbol starting index Array of two symbol
// Determine if a positive number can be expressed as a sum of two cubes?
// 4SUM
// from an array of integers find 10 numbers closest to a given number amazon
// find a rotation point of a sorted array.
// Finding three elements in an array whose sum is closest to an given number
// Write a function to find the nearest link on a webpage given the mouse x,y coordinates
