/** product: calculate the product of an array of numbers. */

function product(nums, idx = 0) {
  if (idx === nums.length) {
    return 1;
  }

  return nums[idx] * product(nums, idx + 1)

}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx = 0, longestWord = 0) {
  if (idx === words.length) {
    return longestWord;
  }

  // compare the current word at the index to the longest word we have stored
  longestWord = Math.max(words[idx].length, longestWord)
  // console.log(longestWord)
  return longest(words, idx + 1, longestWord)

}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, returnStr = "") {
  if (idx >= str.length) {
    return returnStr;
  }
  // add whatever letter is on the string at that index to our new string
  returnStr += str[idx]
  // console.log(returnStr)

  // start at index 0, skip every other index by adding 2 instead of 1
  return everyOther(str, idx + 2, returnStr)

}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx = 0) {
  // take the first letter and the last letter and compare them to each other
  let left = idx;
  let right = str.length - idx - 1
  // console.log("string length", str.length)
  // console.log(left)
  // console.log(right)

  // if the index is the same we either have a 1 letter word or we're at the middle of the word and haven't failed yet, so it's a palindrome
  if (left >= right) {
    return true;
  }

  // console.log("left letter", str[left])
  // console.log("right letter", str[right])
  if (str[left] !== str[right]) {
    return false;
  }

  return isPalindrome(str, idx + 1)
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  // if it isn't present at all return -1
  if (idx === arr.length) {
    return -1
  }

  // if the index we're on equals the value return the index
  if (arr[idx] === val) {
    return idx;
  }

  // otherwise do it again
  return findIndex(arr, val, idx + 1)

}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = 0, returnStr = "") {
  // if the strings are the same length it's reversed
  if (str.length === returnStr.length) {
    return returnStr;
  }
  // console.log("string??", str[str.length - 1 - idx])
  // put the last index in the original string the new string
  returnStr += str[str.length - 1 - idx]

  // console.log(returnStr)


  return revString(str, idx + 1, returnStr)

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let returnStrs = [];
  // loop through the keys in the object and check what type they are
  for (let key in obj) {
    // console.log("key", key)
    // console.log("value", obj[key])

    // if the value is a string put it on the array of what we're returning
    if (typeof obj[key] === "string") {
      returnStrs.push(obj[key])
    }
    // if an object is nested, take the nested object out and run it through the function to get the strings for it
    if (typeof obj[key] === "object") {
      returnStrs.push(...gatherStrings(obj[key]))
    }
    // return returnStrs;
  }
  return returnStrs;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
  // non binarySearch way...
  // if (arr.length === idx) {
  //   return -1;
  // }

  // if (arr[idx] === val) {
  //   return idx;
  // }
  // return binarySearch(arr, val, idx + 1)

  // binary searching way
  if (left > right) {
    return -1;
  }
  // find the middle index of the array
  let middle = Math.floor((right + left) / 2)
  // if the middle of the array is the value we want, return that index
  if (arr[middle] === val) {
    return middle
  }
  // if the middle is larger than the value, we only need to search the left side of the array since it's sorted
  if (arr[middle] > val) {
    return binarySearch(arr, val, left, middle - 1)
  }
  // if the middle is smaller than the value we want, we only need to search the right side since it's sorted
  return binarySearch(arr, val, middle + 1, right)

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
