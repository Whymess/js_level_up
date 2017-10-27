/*--REDUCE
  Return the sum of all the elements in an array 
  plus an optional initial value.
  For example: reduce([1, 2, 3], 10) returns 16
*/


var array = [1,2,3]
var initial = 10;


var reduce = function(arr, initial) {
	var total = 0
	   for(var i in arr){
	   		total += arr[i]
	   }
   return total + initial
};

