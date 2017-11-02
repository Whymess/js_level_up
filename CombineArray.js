
/*--COMBINE ARRAYS
  Write a function that combines two unsorted arrays into a
  sorted array without any duplicates. Use the comparative
  operators for sorting instead of any sorting functions.
  For example: combineArr([2, 4], [1, 3]) returns [1, 2, 3, 4]
*/


var combineArr = function(arr1, arr2) {
	arr1.forEach((el, i) => {
		if(arr1[i] != arr2[i]) {
		     arr1.push(arr2[i])
		     return arr1
		} else {
			return false
		}
	})
	 return arr1
};

let arrayHandler = combineArr([2, 4], [1, 3]);

let sortedArray = arrayHandler.sort()

/*--Mocha Testing--*/


module.exports = combineArr;