/*
In this task, you need to restore a string from a list of its copies.

You will receive an array of strings. 
All of them are supposed to be the same as the original, but unfortunately, 
they were corrupted which means some of the characters were replaced with asterisks ("*").

You have to restore the original string based on non-corrupted information you have. 
If in some cases it is not possible to determine what the original character was, 
use "#" character as a special marker for that.

If the array is empty, then return an empty string.

Examples:
  input = [
    "a*cde",
    "*bcde",
    "abc*e"
  ]
  result = "abcde"

  input = [
    "a*c**",
    "**cd*",
    "a*cd*"
  ]
  result = "a#cd#"
*/


// Solution 

function assembleString(array){  
  return !array.length ? "" : [...array[0]].map((x, i) => {
    let s = array.find(y => y[i] != "*")
    return !s ? "#" : s[i]
  }).join``
}

// or

const assembleString = a => {
  return [...Array((a[0] || []).length).keys()]
    .map(i => a.map(s => s[i])
    .filter(c => c != '*')[0] || '#')
    .join('');
}