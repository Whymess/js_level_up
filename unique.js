/*--UNIQUE
  Write a function that takes an array and returns 
  a new sorted array containing all of the unique elements
  of the original array.
  For example: unique([1, 2, 2, 3]) returns [1, 2, 3];
*/

var arr =  [9, 9, 111, 2, 3, 4, 4, 5, 7];
var sorted_arr = arr.slice().sort();

var results = [];

sorted_arr.forEach((value, key) =>  {
  if (sorted_arr[key + 1] == sorted_arr[key]) {
        results.push(sorted_arr[key]);
    }
});