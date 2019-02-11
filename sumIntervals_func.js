// calculate sum of all interval length
function sumIntervals(arr) {

	let overlapFlag = false;
	let j = 0;

	while (j < arr.length) {
		for (let i = j + 1; i < arr.length; i++) {
			// check for overlapping ranges between 2 intervals
			if ((arr[j][0] >= arr[i][0] && arr[j][0] <= arr[i][1])
			 || (arr[j][1] >= arr[i][0] && arr[j][1] <= arr[i][1])
			 || (arr[i][0] >= arr[j][0] && arr[i][0] <= arr[j][1])
			 || (arr[i][1] >= arr[j][0] && arr[i][1] <= arr[j][1])) {
			 	// set new non-overlap ranges
				(arr[j][0] > arr[i][0]) ? arr[j][0] = arr[i][0] : arr[j][0];
				(arr[j][1] < arr[i][1]) ? arr[j][1] = arr[i][1] : arr[j][1];
				// remove overlap interval & set flag for recursion
				arr.splice(i, 1);
				overlapFlag = true;
				i--;
			}
			
		}
		j++;
	}

	if (overlapFlag) {return sumIntervals(arr); } else {
		// calculate sum
		let sum = 0;
		for (let i = 0; i < arr.length; i++) {
			sum += arr[i][1] - arr[i][0];
		}
		return sum;
	}
}
